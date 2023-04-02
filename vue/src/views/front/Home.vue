<template>
  <div>
    <div style="margin: 10px 0">
      <el-carousel height="450px" :interval="10000">
        <el-carousel-item v-for="item in lun" :key="item.id">
          <a :href="item.link" target="_blank"><img :src="item.img" alt="" style="width: 100%"></a>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div style="margin: 10px 0">
      <div style="margin: 20px 0; font-size: 20px; color: #07480c; border-bottom: 1px solid #07480c; padding-bottom: 10px">热销推荐</div>
      <el-row :gutter="10">
        <el-col :span="6" v-for="item in goods" :key="item.id" style="margin-bottom: 10px">
          <div style="background-color: white; padding: 10px; cursor: pointer" @click="$router.push('/front/detail?id=' + item.id)">
            <img :src="item.img" alt="" style="width: 100%; height: 200px; overflow: hidden; border-radius: 10px">
            <div style="color: #666; margin: 10px 0" class="line1">{{ item.name }}</div>
            <div style="margin: 10px 0; color: red; font-weight: bold; font-size: 14px">￥{{ item.price }} / {{ item.unit }}</div>
          </div>
        </el-col>
      </el-row>
      <div style="padding: 10px 0; background-color: white">
        <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageNum"
            :page-sizes="[4, 8, 12]"
            :page-size="pageSize"
            layout="total, prev, pager, next"
            :total="total">
        </el-pagination>
      </div>
    </div>
    <div style="margin: 10px 0">
      <div style="margin: 20px 0; font-size: 20px; color: #07480c; border-bottom: 1px solid #07480c; padding-bottom: 10px">助农资讯</div>
    </div>
    <div>
      <div style="float: left;width: 100%;">
        <el-table
        :data = "tableData"
        stripe
        style="width: 100%">
      <el-table-column
      prop="notice"
      width="900">
        <template slot-scope="scope">
          <a href="scope.row.notice" target="_blank" class="buttonText">{{scope.row.notice}}</a>
        </template>
      </el-table-column>
          <el-table-column
              prop="date1"
              width="100">
            <template slot="header" slot-scope="scope">
              <a href="" target="_blank">More<<</a>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrontHome",
  data() {
    return {
      lun: [],
      files: [],
      goods: [],
      pageNum: 1,
      pageSize: 8,
      total: 0,
      tableData:[{
          notice: '最后十天，千万冰糖橙急盼销路，再卖不出去，真的要烂在地里了……',
          date1 :'2023-3-28'
        },{
        notice: '正宗陕西洛川红富士苹果，脆甜多汁，香甜可口，一代老农对生态种植的坚守，只需一口，就能吃出儿时的味道！',
        date1 :'2023-3-19'
      }, {
        notice: '不知火丑橘新鲜上市，目前口感正佳，无籽好剥皮，七旬老农精心种植，酸甜爽口，好吃还不上火！',
        date1 :'2023-3-9'
      }, {
        notice: '助力云南300万斤紫皮鲜蒜走出大山，蒜香浓郁，良心农人一整年的艰辛劳作，期待您的支持！',
        date1 :'2023-2-28'
      },
        {
          notice: '超600万斤武鸣沃柑成熟待销！六旬果农精心种植，香甜多汁，细腻无渣，邀您一同品尝',
          date1 :'2023-2-21'
        },{
        notice: '5斤仅29.9元包邮，超600万斤核桃面临滞销，请您帮忙支持转发助力，帮助山区老农度过难关！',
        date1 :'2020-3-14'
      }]
    }
  },

  created() {
    this.load()
  },
  methods: {
    load() {
      this.request.get("/lun").then(res => {
        this.lun = res.data
      })

      this.request.get("/goods/page", {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          name: this.name,
        }
      }).then(res => {
        this.goods = res.data.records
        this.total = res.data.total
      })
    },
    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      this.load()
    },
    handleCurrentChange(pageNum) {
      this.pageNum = pageNum
      this.load()
    },
  }
}
</script>

<style>
  .line1 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
