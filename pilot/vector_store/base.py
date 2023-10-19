from abc import ABC, abstractmethod


class VectorStoreBase(ABC):
    """base class for vector store database"""

    @abstractmethod
    def load_document(self, documents) -> None:
        """load document in vector database."""
        pass

    @abstractmethod
    def similar_search(self, text, topk) -> None:
        """similar search in vector database."""
        pass

    @abstractmethod
    def vector_name_exists(self) -> bool:
        """is vector store name exist."""
        return False

    @abstractmethod
    def delete_by_ids(self, ids):
        """delete vector by ids."""
        pass

    @abstractmethod
    def delete_vector_name(self, vector_name):
        """delete vector name."""
        pass
