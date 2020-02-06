<template>
  <div class="index">
    <div class="cj" @click="cj">
      <span>立即抽奖</span>
    </div>
    <div
      class="bg"
      v-for="(value, index) in img"
      :key="index"
      :class="value.id === lun ? 'ye' : ''"
    >
      <div class="img">
        <img :src="value.img" alt="" />
        <span>{{ value.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: [
        {
          id: 0,
          title: "第一个",
          img:
            "https://ziyuan.jumpw.com/activity/newyearactivities/images/gift/gift_01.png"
        },
        {
          id: 1,
          title: "第二个",
          img:
            "https://ziyuan.jumpw.com/activity/newyearactivities/images/gift/gift_02.png"
        },
        {
          id: 2,
          title: "第三个",
          img:
            "https://ziyuan.jumpw.com/activity/newyearactivities/images/gift/gift_03.png"
        },
        {
          id: 3,
          title: "第四个",
          img:
            "https://ziyuan.jumpw.com/activity/newyearactivities/images/gift/gift_04.png"
        },
        {
          id: 9,
          title: "第十个",
          img:
            "https://ziyuan.jumpw.com/activity/newyearactivities/images/gift/gift_05.png"
        },
        {
          title: "第一个",
          img:
            "https://ziyuan.jumpw.com/activity/newyearactivities/images/gift/gift_05.png"
        },
        {
          title: "第一个",
          img:
            "https://ziyuan.jumpw.com/activity/newyearactivities/images/gift/gift_05.png"
        },
        {
          id: 4,
          title: "第五个",
          img:
            "https://ziyuan.jumpw.com/activity/newyearactivities/images/gift/gift_06.png"
        },
        {
          id: 8,
          title: "第九个",
          img:
            "https://ziyuan.jumpw.com/activity/newyearactivities/images/gift/gift_07.png"
        },
        {
          id: 7,
          title: "第八个",
          img:
            "https://ziyuan.jumpw.com/activity/newyearactivities/images/gift/gift_08.png"
        },
        {
          id: 6,
          title: "第七个",
          img:
            "https://ziyuan.jumpw.com/activity/newyearactivities/images/gift/gift_09.png"
        },
        {
          id: 5,
          title: "第六个",
          img:
            "https://ziyuan.jumpw.com/activity/newyearactivities/images/gift/gift_10.png"
        }
      ],
      lun: 0,
      timer: "",
      sj: 0,
      zhong: "",
      dian: true
    };
  },
  methods: {
    cj() {
      if (this.dian) {
        this.dian = false;
        this.zhong = Math.floor(Math.random() * 10);
        this.timer = setInterval(() => {
          this.sj++;
          if (this.sj >= 30 && this.lun === this.zhong) {
            this.sj = 0;
            switch (this.zhong) {
              case 0:
                alert(this.img[this.zhong].title);
                break;
              case 1:
                alert(this.img[this.zhong].title);
                break;
              case 2:
                alert(this.img[this.zhong].title);
                break;
              case 3:
                alert(this.img[this.zhong].title);
                break;
              case 4:
                alert(this.img[7].title);
                break;
              case 5:
                alert(this.img[11].title);
                break;
              case 6:
                alert(this.img[10].title);
                break;
              case 7:
                alert(this.img[9].title);
                break;
              case 8:
                alert(this.img[this.zhong].title);
                break;
              case 9:
                alert(this.img[4].title);
                break;
            }
            this.zhong = "";
            clearInterval(this.timer);
            this.dian = true;
            return;
          }
          if (this.lun < 9) {
            this.lun++;
          } else {
            this.lun = 0;
          }
        }, 100);
      }
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.ye {
  background-color: yellow;
}
.index {
  position: relative;
  width: 1200px;
  background-color: red;
  margin: 200px auto;
  display: flex;
  flex-wrap: wrap;
  .bg {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    width: 298px;
    height: 200px;
    .img {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        font-weight: 500;
        padding-top: 10px;
        color: #000;
      }
    }
  }
  .cj {
    position: absolute;
    left: 302px;
    top: 203px;
    background-color: blue;
    height: 200px;
    width: 596px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    span {
      font-size: 50px;
      color: yellow;
    }
  }
}
</style>
