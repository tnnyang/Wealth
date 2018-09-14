<template>
  <nav>
    <ul class="pagination">
      <li :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(current - 1)">«</a></li>
      <!-- <li :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(1)"> 首页 </a></li> -->
      <li v-for="item in grouplist" :class="{'active': current == item.val}"><a href="javascript:;" @click="setCurrent(item.val)">{{item.text}}</a></li>
      <!-- <li :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(page)">尾页</a></li> -->
      <li :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(current + 1)">»</a></li>
    </ul>
  </nav>
</template>

<script>
  export default{
    data(){
      return {
        current: this.currentPage
      }
    },
    props: {
      total: {
        type: Number,
        default: 0
      },
      pageSize: {
        type: Number,
        default: 10
      },
      currentPage: {
        type: Number,
        default: 1
      },
      pagegroup: {
        type: Number,
        default: 5,
        coerce(v) {
          v = v > 0 ? v : 5;
          return v % 2 === 1 ? v : v + 1;
        }
      }
    },
    computed: {
      page() { 
        return Math.ceil(this.total / this.pageSize);
      },
      grouplist() {
        let len = this.page, temp = [], list = [], count = Math.floor(this.pagegroup / 2), center = this.current;
        if(len <= this.pagegroup){
          while (len--) {
            temp.push({text: this.page - len, val: this.page - len});
          };
          return temp;
        }
        while(len--){
          temp.push(this.page - len);
        };
        let idx = temp.indexOf(center);
        (idx < count) && ( center = center + count - idx);
        (this.current > this.page - count) && ( center = this.page - count);
        temp = temp.splice(center - count - 1, this.pagegroup);
        do{
          let t = temp.shift();
          list.push({
            text: t,
            val: t
          });
        }while(temp.length);
        if(this.page > this.pagegroup){
          (this.current > count + 1) && list.unshift({text: '...', val: list[0].val - 1});
          (this.current < this.page - count) && list.push({text: '...', val: list[list.length - 1].val + 1});
        }
        return list;
      }
    },
    methods: {
      setCurrent(idx) {
        if(this.current != idx && idx > 0 && idx < this.page + 1){
          this.current = idx;
          this.$emit('pageChange', this.current);
        }
      }
    }
  }
</script>

<style>
.pagination{text-align:center;margin:63px 0;}
.pagination li{display:inline-block;}
.pagination li a{display:block;width:44px;height:44px;line-height:44px;background:#fff;color:#999;margin:0 8px;border-radius:4px;font-size:22px;}
.pagination li:hover a, .pagination li.active a{background:#cea871;color:#fff;}
.pagination li.disabled a{cursor:not-allowed;background:#bbb;color:#999;}
</style>