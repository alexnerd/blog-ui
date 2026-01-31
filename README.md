# blog-ui

Interface for a personal blog. 
Written without the use of frameworks or libraries, only js and web components. 
Supports caching with service worker. 

## Typography check (dev note)
Use DevTools to verify headings use a single font:
- Open a page with headings.
- In DevTools, inspect a RU heading and an EN heading.
- In the Computed panel, find "Rendered Fonts" and confirm both show "Roboto Slab" with no fallback.

Optional visual check snippet (temporary, for any view template):
```html
<h2 class="post-header">Пример заголовка</h2>
<h2 class="post-header">Example heading</h2>
```
