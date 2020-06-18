## Installation
### UMD
```
<div id="gnb"></div>
<script src="./zmon-gnb.ts"></script>
<script>
    const { getGNB } = $zmon;
    window.addEventListener("load", function() {
        const gnbEl = document.getElementById("gnb");
    getGNB(gnbEl)
})
</script>
```

### ES6 Module
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
