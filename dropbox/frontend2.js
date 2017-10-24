class Element {
  constructor() {
    this.className = "";
    this.children = [];
    this.parentElement = null;
  }
}

// Implement nested child selectors only using the apis from Element
/*
E.g.
<div class="rootNode">
  <div class="a">
    <div class="b">
      <div class="c">
        <div class="d" />
      </div>
      <div class="c" />
    </div>
  </div>
</div>
a>b>c => [c => d, c]

 */
