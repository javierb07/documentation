# Object Pool

The Object Pool design pattern is useful when it is necessary to work with a large number of objects that are particularly expensive to instantiate, especially if each object is only needed for a short period of time. 

Instead of creating and destroying the expensive objects, the object pool pattern suggests reusing the already created objects.

When a new object is needed, it is requested from the pool. If a previously prepared object is available it is returned immediately, avoiding the instantiation cost. If no objects are present in the pool, a new item is created and returned. When the object has been used and is no longer needed, it is returned to the pool, allowing it to be used again in the future without repeating the expensive instantiation process.

For example, the Object Pool design pattern is used in the .NET Framework Data Provider for SQL Server. As SQL Server database connections can be slow to create, a pool of connections is maintained. When you close a connection, the connection is held in a pool from which it can be retrieved when requesting a new connection. This substantially increases the speed of making connections.

Object Pools are usually implemented as Singletons.