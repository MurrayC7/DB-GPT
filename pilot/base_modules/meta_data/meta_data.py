import uuid
import os
import duckdb
import sqlite3
import logging
import fnmatch
from datetime import datetime
from typing import Optional, Type, TypeVar

from sqlalchemy import create_engine, DateTime, String, func, MetaData, DDL
from sqlalchemy.exc import OperationalError
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

from alembic import context, command
from alembic.config import Config as AlembicConfig
from urllib.parse import quote
from pilot.configs.config import Config


logger = logging.getLogger("meta_data")

CFG = Config()
default_db_path = os.path.join(os.getcwd(), "meta_data")

os.makedirs(default_db_path, exist_ok=True)

# Meta Info
db_name = "dbgpt"
db_path = default_db_path + f"/{db_name}.db"
connection = sqlite3.connect(db_path)

if CFG.LOCAL_DB_TYPE == "mysql":
    engine_temp = create_engine(
        f"mysql+pymysql://"
        + quote(CFG.LOCAL_DB_USER)
        + ":"
        + quote(CFG.LOCAL_DB_PASSWORD)
        + "@"
        + CFG.LOCAL_DB_HOST
        + ":"
        + str(CFG.LOCAL_DB_PORT)
    )
    # check and auto create mysqldatabase
    try:
        # try to connect
        with engine_temp.connect() as conn:
            conn.execute(DDL(f"CREATE DATABASE IF NOT EXISTS {db_name}"))
        print(f"Already connect '{db_name}'")

    except OperationalError as e:
        # if connect failed, create dbgpt database
        logger.error(f"{db_name} not connect success!")

    engine = create_engine(
        f"mysql+pymysql://"
        + quote(CFG.LOCAL_DB_USER)
        + ":"
        + quote(CFG.LOCAL_DB_PASSWORD)
        + "@"
        + CFG.LOCAL_DB_HOST
        + ":"
        + str(CFG.LOCAL_DB_PORT)
        + f"/{db_name}"
    )
else:
    engine = create_engine(f"sqlite:///{db_path}")


Session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
session = Session()

Base = declarative_base()

# Base.metadata.create_all()

# 创建Alembic配置对象

alembic_ini_path = default_db_path + "/alembic.ini"
alembic_cfg = AlembicConfig(alembic_ini_path)

alembic_cfg.set_main_option("sqlalchemy.url", str(engine.url))

os.makedirs(default_db_path + "/alembic", exist_ok=True)
os.makedirs(default_db_path + "/alembic/versions", exist_ok=True)

alembic_cfg.set_main_option("script_location", default_db_path + "/alembic")

# 将模型和会话传递给Alembic配置
alembic_cfg.attributes["target_metadata"] = Base.metadata
alembic_cfg.attributes["session"] = session


# # 创建表
# Base.metadata.create_all(engine)
#
# # 删除表
# Base.metadata.drop_all(engine)


def ddl_init_and_upgrade():
    # Base.metadata.create_all(bind=engine)
    # 生成并应用迁移脚本
    # command.upgrade(alembic_cfg, 'head')
    # subprocess.run(["alembic", "revision", "--autogenerate", "-m", "Added account table"])
    with engine.connect() as connection:
        alembic_cfg.attributes["connection"] = connection
        heads = command.heads(alembic_cfg)
        print("heads:" + str(heads))

        command.revision(alembic_cfg, "dbgpt ddl upate", True)
        command.upgrade(alembic_cfg, "head")
