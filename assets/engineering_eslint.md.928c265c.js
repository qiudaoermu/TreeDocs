import{_ as s,c as n,o as a,d as e}from"./app.612d77b0.js";const u=JSON.parse('{"title":"eslint \u914D\u5408vscode \u4E0D\u4EC5\u53EF\u4EE5\u68C0\u6D4B\u4EE3\u7801\uFF0C\u8FD8\u53EF\u4EE5\u683C\u5F0F\u5316\u4EE3\u7801\u3002","description":"","frontmatter":{},"headers":[{"level":2,"title":"eslint \u914D\u5408vscode \u4E0D\u4EC5\u53EF\u4EE5\u68C0\u6D4B\u4EE3\u7801\uFF0C\u8FD8\u53EF\u4EE5\u683C\u5F0F\u5316\u4EE3\u7801\u3002","slug":"eslint-\u914D\u5408vscode-\u4E0D\u4EC5\u53EF\u4EE5\u68C0\u6D4B\u4EE3\u7801\uFF0C\u8FD8\u53EF\u4EE5\u683C\u5F0F\u5316\u4EE3\u7801\u3002"}],"relativePath":"engineering/eslint.md","lastUpdated":1662108518000}'),l={name:"engineering/eslint.md"},o=e(`<h2 id="eslint-\u914D\u5408vscode-\u4E0D\u4EC5\u53EF\u4EE5\u68C0\u6D4B\u4EE3\u7801\uFF0C\u8FD8\u53EF\u4EE5\u683C\u5F0F\u5316\u4EE3\u7801\u3002" tabindex="-1">eslint \u914D\u5408vscode \u4E0D\u4EC5\u53EF\u4EE5\u68C0\u6D4B\u4EE3\u7801\uFF0C\u8FD8\u53EF\u4EE5\u683C\u5F0F\u5316\u4EE3\u7801\u3002 <a class="header-anchor" href="#eslint-\u914D\u5408vscode-\u4E0D\u4EC5\u53EF\u4EE5\u68C0\u6D4B\u4EE3\u7801\uFF0C\u8FD8\u53EF\u4EE5\u683C\u5F0F\u5316\u4EE3\u7801\u3002" aria-hidden="true">#</a></h2><ol><li>npm \u5168\u5C40\u5B89\u88C5 eslint</li></ol><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i eslint -g</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>vscode \u5B89\u88C5 eslint</li><li>\u6DFB\u52A0\u4EE5\u4E0B\u914D\u7F6E,\u4F7F\u7F16\u8F91\u5668\u5728\u4FDD\u5B58\u65F6\u81EA\u52A8\u6839\u636Eeslint\u89C4\u5219\u683C\u5F0F\u5316\uFF0C\u4E0D\u9700\u8981\u518D\u914D\u7F6Eprettier\u3002</li></ol><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">editor.codeActionsOnSave</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">source.fixAll</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#676E95;">/* \u5173\u95ED\u7F16\u8F91\u5668\u81EA\u5E26\u4FDD\u5B58\u683C\u5F0F\u5316\u529F\u80FD\uFF0C\u6B64\u529F\u80FD\u4F1A\u7528Vetur\u8FDB\u884C\u683C\u5F0F\u5316\u3002*/</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">editor.formatOnSave</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">false</span></span>
<span class="line"></span></code></pre></div><p>\u7F3A\u70B9\uFF1A\u53EA\u9488\u5BF9\u7279\u5B9A\u6587\u4EF6\uFF0Ccss markdown\u65E0\u6CD5lint\uFF1B</p>`,6),t=[o];function p(c,r,i,d,D,_){return a(),n("div",null,t)}const F=s(l,[["render",p]]);export{u as __pageData,F as default};
