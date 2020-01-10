<script>
  export let header;
  export let points;
</script>

<style>
  ul{
    list-style-type: circle;
  }

  h1{
    width: fit-content;
    padding: 0;
    margin: 0;
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
  <slot></slot>
</div>
