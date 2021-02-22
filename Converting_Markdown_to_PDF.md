{"title": "Converting Markdown to PDF", "date": "2021-02-21"}

Recently, I had to convert a large number of Markdown files to PDF. Obviously, I wanted to automate this.

After doing some research I settled on the following approach:

1. Convert Markdown to HTML using powershell.
2. Convert HTML to PDF using headless chrome.

## Converting Markdown to HTML

Apparently, powershell now has a [`ConvertFrom-Markdown`](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/convertfrom-markdown?view=powershell-7.1) commandlet (yay!). This returns an object which contains the abstract syntax tree but also, the `Html` property.

Converting Markdown to HTML is as simple as

```powershell
(ConvertFrom-Markdown input.md).Html | out-file output.html
```

## Converting HTML to PDF

[Headless Chrome](https://developers.google.com/web/updates/2017/04/headless-chrome) is a way to run chrome without a user interface. The command to print HTML to PDF is:

```powershell
& chrome --headless --disable-gpu --print-to-pdf-no-header --print-to-pdf=E:\output.pdf  E:\out.html
```

That is a mouthful so let's go over it step by step

* `chrome` : you should replace this with the path to `chrome.exe`.
* `--headless` : this tells Chrome to run in headless mode
* `--disable-gpu` : needed on windows
* `--print-to-pdf-no-header` : this prevents chrome from adding headers and footers
* `--print-to-pdf` : the path to the outputted PDF file
* The last argument is the path to the HTML input file

> **Warning** : I've noticed that headless chrome only works with absolute paths, not relative paths. You can use [`Resolve-Path`](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/resolve-path?view=powershell-7.1) to transform a relative path into an absolute path.

The final script is this:

```
param($markdownpath)

$markdownpath = (Resolve-Path $markdownpath).Path
$htmlpath = "$markdownpath.html"
$pdfpath = "$markdownpath.pdf"

(ConvertFrom-Markdown $markdownpath).Html | out-file $htmlpath

& "$($Env:ProgramFiles) (x86)\Google\Chrome\Application\chrome.exe"  --headless --disable-gpu --print-to-pdf-no-header --print-to-pdf=$pdfpath  $htmlpath
```

Hope this helps.