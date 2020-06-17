### 1. UMD
```
<div id="gnb"></div>
<script src="./zmon-gnb.js"></script>
<script>
    const { getGNB } = $zmon;
    window.addEventListener("load", function() {
        const gnbEl = document.getElementById("gnb");
    getGNB(gnbEl)
})
</script>
```

### 2. ES6 Module import
```
<div id="gnb"></div>
<script type="module">
    import { getGNB } from '../zmon-gnb.mjs'
    window.addEventListener("load", function() {
        const gnbEl = document.getElementById("gnb");
    getGNB(gnbEl);
});
</script>
```
