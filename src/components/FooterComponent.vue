<template> 
    <footer class="footer">
       <span>all right reserved</span>
    </footer>
</template>

<script>
export default {
    name: "FooterComponent"
}
</script>

<style lang="scss" scoped> 
.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 76px;
    background-color: #FAFAFA;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
}
</style>