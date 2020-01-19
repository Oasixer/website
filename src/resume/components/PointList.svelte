<script>
  export let points;
  import { education_awards_interests_font_size } from '../utils/settings.js';
</script>

<style>
  ul{
    margin: 3px 0 0 0;
  }

</style>

<!--  <Section>  -->
  <ul>
  {#each points as p}
    <li style="font-size: {$education_awards_interests_font_size}px;">
      {p}
    </li>
  {/each}
  </ul>
  <!--  </Section>  -->
