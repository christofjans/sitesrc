{"title": "Calling Javascript from Blazor", "date": "2020-12-12"}

Blazor Webassembly is a technology that allows you to write web applications in C#/.NET . But sometimes you need to call into Javascript.

Consider the following scenario:


```cs
@page "/demo"

<input type="button" value="Delete" @onclick="Delete" />

@code {
    public async Task Delete()
    {
       // delete something
    }
}
```

When clicking the button, the `Delete` method will be called which - presumably - will delete something. 

Now suppose we wanted to add a confirmation dialog. In javascript there exists a `confirm` method: `if confirm("Are you sure ?") {...}`. But how would we call that method from Blazor ?

Enter `IJSRuntime` :


```cs
@page "/demo"
@inject IJSRuntime js;

<input type="button" value="Delete" @onclick="Delete" />

@code {
    public async Task Delete()
    {
        if (await js.InvokeAsync<bool>("confirm", "Are you sure ?"))
        {
            // delete something
        }
    }
}
```

We inject the `IJSRuntime` service with the `@inject` directive. In the `Delete` method, we invoke the `confirm` method as follows:

```cs
js.InvokeAsync<bool>("confirm", "Are you sure ?")
```

The signature for `InvokeAsync` is :

```cs
ValueTask<T> IJSRuntime.InvokeAsync<T>(string identifier, object?[]? args)
```

The `identifier` parameter is the Javascript method you want to call ("confirm" in our case). Next are the arguments you want to pass to that Javascript method.

There is a lot more to say about blazor/js interop. If you are interested you can read about it [here](https://docs.microsoft.com/en-us/aspnet/core/blazor/call-javascript-from-dotnet?view=aspnetcore-5.0) .

Hope this helps.