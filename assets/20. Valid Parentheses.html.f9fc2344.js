import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as i,e as n}from"./app.c5b226fa.js";const s={},r=n(`<h2 id="leetcode-20-valid-parentheses-javascript" tabindex="-1"><a class="header-anchor" href="#leetcode-20-valid-parentheses-javascript" aria-hidden="true">#</a> Leetcode 20. Valid Parentheses (JavaScript)</h2><h4 id="problem-read-at-the-leecode" tabindex="-1"><a class="header-anchor" href="#problem-read-at-the-leecode" aria-hidden="true">#</a> Problem: Read at the <a href="https://leetcode.com/problems/valid-parentheses/" target="_blank" rel="noopener noreferrer">leecode</a></h4><h2 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution:</h2><p>Here we are gonna use <code>stack</code> data structure which is just a array and <code>hashmap</code> which can be implemented as object.</p><h2 id="algorithm" tabindex="-1"><a class="header-anchor" href="#algorithm" aria-hidden="true">#</a> Algorithm</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    var isValid = function(s){
        let map = {
            &#39;}&#39; : &#39;{&#39;,
            &#39;)&#39; : &#39;(&#39;,
            &#39;]&#39; : &#39;[&#39;
        }
        let stack = []
        if( !s) return false // halt program immediately if empty stack
        for(let i = 0; i &lt; s.length; i++){
            let curr = s[i]
            if(map[curr]){
                let top = (stack.length === 0) ? &#39;0&#39; : stack.pop()
                if(top !== map[curr]){
                    return false
                }
            }
            else{
                stack.push(curr)
            }
        }
        return stack.length === 0

    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d=[r];function l(t,c){return a(),i("div",null,d)}var h=e(s,[["render",l],["__file","20. Valid Parentheses.html.vue"]]);export{h as default};
