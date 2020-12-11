{"title": "The proper care and disposing of one's service provider", "date": "2020-12-10"}

Recently, I was working on an application which logged information to the Console. The issue I ran into is that the logging information would not always show up in the console; sometimes it would, sometimes it wouldn't.

Simplified, my code was as follows:

```cs
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

var serviceProvider = CreateServiceProvider();
var myService = serviceProvider.GetService<MyService>();

myService.DoWork();

static ServiceProvider CreateServiceProvider()
{
    var serviceCollection = new ServiceCollection();
    serviceCollection.AddLogging(loggingBuilder=>loggingBuilder.AddConsole());
    serviceCollection.AddSingleton<MyService>();

    return serviceCollection.BuildServiceProvider();
}

class MyService
{
    public MyService(ILogger<MyService> logger) => this.logger = logger;

    public void DoWork() => logger.LogInformation("working ...");

    private ILogger<MyService> logger;
}
```

As you can see, calling `myService.DoWork();` is supposed to log `working ...` to the console. And yet it only worked intermittently.

After some Googling, I found out that the logging output to the Console is buffered. You only see the output if the buffer is flushed. My application would exit before the flush happened. Of course, I could wait for the flush to happen by adding a `Thread.Sleep` but that's hacky and error-prone.

The *correct* way is to `Dispose` of the service provider. This will Dispose all it's contained services, causing the buffer to get flushed.

So - using the C#8 `using` syntax - we get:

```
using var serviceProvider = CreateServiceProvider();
```

And voila, it works :

```
info: MyService[0]
      working ...
```

Hope this helps.