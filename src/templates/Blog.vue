<template>
  <Layout :title="$page.post.title">
    <div v-html="$page.post.content">
      <p>sssss</p>
  </Layout>
</template>

<page-query>
query blog ($path: String!) {
  post: blogs(path: $path){
    title
    content
    path
    date
  }
}
</page-query>
