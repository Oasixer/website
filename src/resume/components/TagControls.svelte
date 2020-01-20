<script>
  export let item;

</script>

<style>
  div.row{
    display: flex;
    flex-flow: row nowrap;
  }

  div.individual{
    background-color: #999999;
  }

  /* The container */
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #2196F3;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 6px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  input[type="number"]{
    width: 54px;
    text-align: center;
    font-size: 16px;
    height: 25px;
    margin-right: 8px;
  }
  div.tag-controls-outer{
    background-color: #dddddd;
  }

  h4{
    margin: 0;
  }
</style>

<div class='tag-controls-outer'>
<h4>Tag Controls</h4>
{#each item.tags as tag}
  <div class="individual">
    <h4>{tag.name}</h4>
    <div class="row">
      <input type="number" bind:value={tag.order}>
      <label>Order</label>
    </div>
    <label class="container">Force hide
      <input type="checkbox" bind:checked={tag.force_hide}>
      <span class="checkmark"></span>
    </label>
    <label class="container">Use as index to show this section
      <input type="checkbox" bind:checked={tag.use_index}>
      <span class="checkmark"></span>
    </label>
  </div>
{/each}
</div>
