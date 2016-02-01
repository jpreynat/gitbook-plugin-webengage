WebEngage Integration And Reader Analytics For GitBook
==============

## Installation

**NPM**:

```
$ npm install gitbook-plugin-webengage
```

**gitbook-cli**:

```
$ gitbook install
```
> Make sure you already have made reference to `webengage`-plugin inside your `book.json` `plugins` section. **Ex.:**  

> ```"plugins": [..., "webengage", ...],```

## Usage

Use within your book by making following entry in your `book.json`:

```
{
    "plugins": ["webengage"]
}
```

Now set the WebEngage configuration inside the **plugins configuration** in your `book.json` file: 

**Configuration Options:**

1. **licenseCode**: Your license code as issued by WebEngage on signing-up. This is a **Required** setting, and cannot be ignored.

2. **version**: WebEngage Widget Code version. **Optional** setting. Default is **5**.

3. **enableAnalytics**: Set this to true if you want to enable **Reader-Analytics**. This will allow you to analyse how your readers read your books/documentation, and which parts of the book/doc. needs more focus.
This is an **Optional** setting. Default is **false**. 

**Example configuration:**
```
{
    "plugins": ["webengage"],
    "pluginsConfig": {
        "webengage": {
            "licenseCode": "~f42fg4h",
            "version": 5,
            "enableAnalytics": true
        }
    }
}
```

For an overview of all available options for `JavaScript API's`, please refer to the official [WebEngage Docs](http://docs.webengage.com).
