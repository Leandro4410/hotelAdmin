<template>
  <el-aside :style="`width:${asideStyle}px;height:100%;`">
    <el-menu 
      :default-active="bMenuIndex"
      class="el-menu-vertical-demo"
      background-color="#556D84"
      text-color="#fff"
      :collapse="bAsideStatus"
      :show-timeout="300"
    >
      <router-link to='/'>
        <el-menu-item index="1">
          <i class="el-icon-setting"></i>
          <span slot="title">首页</span>
        </el-menu-item>
      </router-link>
     <router-link to='/test'>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">开退房管理</span>
        </el-menu-item>
      </router-link>
      <router-link to='/history'>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">历史纪录查询</span>
        </el-menu-item>
      </router-link>
      <router-link to='/statistics'>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">收入统计汇总</span>
        </el-menu-item>
      </router-link>
      <router-link to='/roomInfor'>
        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title">房间信息管理</span>
        </el-menu-item>
      </router-link>
    </el-menu>
  </el-aside>
</template>


<script>
import bus from '../assets/bus.js';
export default {
  data(){
    return {
      bMenuIndex:'1',
      bAsideStatus:false,
      asideStyle:240
    }
  },
  mounted(){
    let router=this.$route.path;
    switch(router){
      case '/':
        this.bMenuIndex='1';
      break;
      case '/test':
        this.bMenuIndex='2';
      break;
      case '/history':
        this.bMenuIndex='3';
      break;
      case '/statistics':
        this.bMenuIndex='4';
      break;
      case '/roomInfor':
        this.bMenuIndex='5';
      break;
      default:
        this.bMenuIndex='1';
    }
    this.bAsideStatus=window.localStorage.getItem('asideStatus');
    // console.log(this.bAsideStatus)
    if(this.bAsideStatus===null){
      this.bAsideStatus=false;
    }else{
      // this.bAsideStatus=true;
      this.bAsideStatus=this.bAsideStatus==='false'?false:true;
    }
    console.log(this.b)
    if(this.bAsideStatus){
      this.asideStyle=65;
    }else{
      this.asideStyle=240;
    }
    bus.$on('changeStatus',(data)=>{
      this.bAsideStatus=data;
      if(this.bAsideStatus){
        this.asideStyle=65;
      }else{
        this.asideStyle=240;
      }
    })
  },
  methods: {
    
  }
}
</script>
