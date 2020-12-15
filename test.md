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

> **Mark Twain:** Suppose you were an idiot and suppose you were a member of congress; but I repeat myself .


Javascript test:

<canvas id="clock" width="256" height="256" ></canvas>

Table test:

item | price
-----|----------:
xbox | `$300.00`
food | `$40.00`

This is text that has been ==marked== .

superscript test: 2^10^ = 1024

subscript test: H~2~O is a liquid .

This is text that has been ~~deleted~~ .

This is the end of this test post.  

<script type="module" >
    import {runclock} from './clock.js'

    runclock('clock');
</script>
