{"title":"Test","date":"2013-07-14"}


This is a test post of my new "blog-engine". The world clearly does not have enough blog engines so I decided to write my own. It uses git, .NET Core and Markdown on the client and is hosted on GitHub.

## Math

Math is awesome. I don't know if I'll be doing a lot of math blogging, but I would like to have the option. I'm using the awesome [MathJax](http://www.mathjax.org) library to render math.

This is inline math: $$[ ax^2 + bx + c = 0 ]$$ .  

This is a math paragraph:  

$$[
    x = {-b \pm \sqrt{b^2-4ac} \over 2a}.
]$$

## Code 

For code styling I'm currently using [Highlight.js](https://highlightjs.org/) .

This is inline code: `console.log("Hello, world !");` .  

This is a code paragraph :

```js
// example of code paragraph

var i;

for (i=0;i<100;i++) {
    console.log(i);
}
```

## Media

Image test:

<img src="beach.jpg" />

Youtube test:

![youtube.com](https://www.youtube.com/watch?v=rNqpD3Mg9hY)

## misc

Quote test:

> Suppose you were an idiot and suppose you were a member of congress; but I repeat myself .
> - Mark Twain

Javascript animation test:

<div id="datetime"></div>

Table test:

a | b
-- | -
0 | 1


------

This is the end of this test post.  

<script type="text/javascript">
    setInterval(function(){
        var element = document.getElementById('datetime');
        var d = new Date();
        element.innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    }, 400);
</script>