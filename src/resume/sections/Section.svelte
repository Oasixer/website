<script>
  export let header;
</script>

<style>
  div.section-main{
  }
  
  div.section-content{
    margin: 10px 0 0 0;
  }

  h1{
    width: fit-content;
    padding: 0;
    margin: 0;
    color: purple;
    font-size: 24px;
  }

  div.line{
    height: 2px;
    background: black;
    flex: 1 1; /* grow shrink basis */
  }
</style>

<div class='section-main'>
  <h1>{header}</h1>
  <div class="line">
  </div>
  <div class='section-content'>
    <slot></slot>
  </div>
</div>
