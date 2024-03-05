# Singleton Logger class that will be responsible for logging different actions.
# The most popular way of creating a singleton in Python is using the metaclass approach:
# A metaclass is the class of a class. Like a class defines how an instance of the class behaves, a metaclass defines how a class behaves. A class is an instance of a metaclass.

class Singleton(type):

    def _init_(cls, name, bases, attrs, **kwargs):
        super()._init_(name, bases, attrs)
        cls._instance = None

    def _call_(cls, *args, **kwargs):
        if cls._instance is None:
            cls.instance = super().call_(*args, **kwargs)
        return cls._instance


class Logger(metaclass=Singleton):
    #some class
    pass

l1 = Logger()
l2 = Logger()
print(l1 is l2)