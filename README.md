### That is this?

LazyImage.svelte component preloads inlined base64 thumbnail image, blur it and shows full image version  after it is loaded 

src/img/convert.js has a list of images to convert to base64 before running npm/yarn build or start (or dev)

##### 1) Run before start:

```
    node src/img/convert.js
```

##### 2) Run the project

```
   yarn install
   yarn dev
```


