<template>
  <button class="default-button"><slot/></button>
</template>

<style scoped>
.default-button {
  color: var(--color-white);
  background-color: var(--color-green);
  border: none;
  color: white;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 12.5rem;
  height: 2.5rem;
}
</style>
