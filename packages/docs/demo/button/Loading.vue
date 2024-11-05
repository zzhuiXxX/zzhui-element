<template>
  <div>
    <zz-button type="primary" loading>Loading</zz-button>
    <zz-button type="primary" loading-icon="circle-notch" loading
      >Loading</zz-button
    >
    <zz-button type="primary" loading>
      <template #loading>
        <zz-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </zz-button>
  </div>
</template>