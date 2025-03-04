<script lang="ts">
    import { onMount } from 'svelte';
  
    let items = [];
  
    onMount(async () => {
      const res = await fetch('/api/items');
      items = await res.json();
    });
  </script>
  
  <h1>Item List</h1>
  <ul>
    {#each items as item}
      <li>{item.name}</li>
    {/each}
  </ul>
  