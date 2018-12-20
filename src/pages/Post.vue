<template>
  <Layout>
    <g-image alt="Example image" src="~/favicon.png" width="135" />
    <div v-for="item in $page.allblogs.edges" :key="item.id">
      <g-link :to="item.node.path">
      <div>
        <h3>{{item.node.id}}</h3>
      <h6>{{item.node.title}}</h6>
      <p>{{item.node.content}}</p>
      <p>{{item.node.path}}</p>
    </div>
    </g-link>
    </div>
  </Layout>
</template>
<page-query>
query Blog {
  allblogs(perPage: 5) {
    edges {
      node {
        id
        title
        content
        path
      }
    }
  }
}
</page-query>
