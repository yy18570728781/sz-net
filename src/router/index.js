import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie' 
Vue.use(Router)
/* Layout */
import Layout from '@/layout'

// let lang = localStorage.getItem('language') || 'zh'
let lang = Cookies.get('language') || 'zh'
let routesName = {} 
if(lang == 'zh'){
    routesName = {
      Dashboard: "首页",
      Member: "会员",
      SeniorMember: "高级会员",
      Robot: "机器人",
      CompanyProfit: "公司利润",
      AgentProfit: "代理总结",
      MemberProfit: "会员总结",
      Game: "游戏",
      TopupWithdraw: "上下分明细",
      PointTransfer: "积分转移明细",
      CreditLimit: "信用额度明细",
      MemberBonus: "会员奖励",
      CompanyExpenses: "公司费用",
      MyProfile: "我的信息",
      MyProfit: "我的总结",
      DownlineAgent: "下线代理总结",
      DownlineMember: "下线会员总结",
      Downline: "下线",
      TopupWithdraw: "上下分明细",
   }
}
if(lang == 'en'){
    routesName = {
      Dashboard: "Dashboard",
      Member: "Member",
      SeniorMember: "Senior Member",
      Robot: "Robot",
      CompanyProfit: "Company Profit",
      AgentProfit: "Agent Profit",
      MemberProfit: "Member Profit",
      Game: "Game",
      TopupWithdraw: "Point Details",
      PointTransfer: "Transfer Details",
      CreditLimit: "Credit Details",
      MemberBonus: "Member Bonus",
      CompanyExpenses: "Company Expenses",
      MyProfile: "My Profile",
      MyProfit: "My Profit",
      DownlineAgent: "Downline Agent",
      DownlineMember: "Downline Member",
      Downline: "Downline",
      // TopupWithdraw: "Topup Withdraw",
   }
}

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {
        // title: '首页',
        title: routesName.Dashboard,
        icon: 'dashboard',
      }
    }]
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  


]
export const asyncRoutes = [
  {
    path: '/admin/member',
    component: Layout,
    children: [{
      path: 'index',
      name: 'member',
      component: () => import('@/views/admin/member/index'),
      meta: {
        title: routesName.Member,
        icon: 'hy',
        roles: ["admin", "staff",]
      }
    }]
  },
  {
    path: '/admin/seniorMember',
    component: Layout,
    // redirect: '/example/table',
    // name: 'Example',
    // meta: {
    //   title: '高级会员',
    //   icon: 'el-icon-s-help'
    // },
    children: [{
        path: 'index',
        name: 'seniorMemberList',
        component: () => import('@/views/admin/seniorMember/index'),
        meta: {
          // title: '高级会员',
          title:routesName.SeniorMember,
          icon: 'suser',
          roles: ["admin", "staff",]
        }
      },

    ]
  },
  {
    path: '/admin/robot',
    component: Layout,
    children: [{
      path: 'index',
      name: 'robot',
      component: () => import('@/views/admin/robot/index'),
      meta: {
        // title: '机器人',
        title:routesName.Robot,
        icon: 'credit',
        roles: ["admin", "staff",]
      }
    }]
  },
  {
    path: '/admin/companyProfit',
    component: Layout,
    children: [{
      path: 'index',
      name: 'companyProfit',
      component: () => import('@/views/admin/companyProfit/index'),
      meta: {
        // title: '公司利润',
        title:routesName.CompanyProfit,
        icon: 'companyProfit',
        roles: ["admin","staff",]
      }
    }]
  },
  {
    path: '/admin/seniorMemberProfit',
    component: Layout,
    children: [{
      path: 'index',
      name: 'seniorMemberProfit',
      component: () => import('@/views/admin/seniorMemberProfit/index'),
      meta: {
        // title: '代理总结',
        title:routesName.AgentProfit,
        icon: 'zj',
        roles: ["admin","staff",]
      }
    }]
  },
  {
    path: '/admin/memberProfit',
    component: Layout,
    children: [{
      path: 'index',
      name: 'memberProfit',
      component: () => import('@/views/admin/memberProfit/index'),
      meta: {
        // title: '会员总结',
        title:routesName.MemberProfit,
        icon: 'zj',
        roles: ["admin","staff",]
      }
    }]
  },
  {
    path: '/admin/game',
    component: Layout,
    children: [{
      path: 'index',
      name: 'game',
      component: () => import('@/views/admin/game/index'),
      meta: {
        // title: '游戏',
        title:routesName.Game,
        icon: 'game',
        roles: ["admin","staff",]
      }
    }]
  },
  
  
  {
    path: '/admin/pointDetail',
    component: Layout,
    children: [{
      path: 'index',
      name: 'adminPointDetail',
      component: () => import('@/views/admin/pointDetail/index'),
      meta: {
        // title: '上下分明细',
        title:routesName.TopupWithdraw,
        icon: 'point',
        roles: ["admin", "staff",]
      }
    }]
  },
  {
    path: '/admin/pointTransferDetail',
    component: Layout,
    children: [{
      path: 'index',
      name: 'pointTransferDetail',
      component: () => import('@/views/admin/pointTransferDetail/index'),
      meta: {
        // title: '积分转移明细',
        title:routesName.PointTransfer,
        icon: 'pointTransferDetail',
        roles: ["admin","staff",]
      }
    }]
  },
  {
    path: '/admin/creditDetail',
    component: Layout,
    children: [{
      path: 'index',
      name: 'adminCreditDetail',
      component: () => import('@/views/admin/creditDetail/index'),
      meta: {
        // title: '信用额度明细',
        title:routesName.CreditLimit,
        icon: 'credit',
        roles: ["admin", "staff",]
      }
    }]
  },
  
  
  
  
  
  {
    path: '/admin/memberBonus',
    component: Layout,
    children: [{
      path: 'index',
      name: 'memberBonus',
      component: () => import('@/views/admin/memberBonus/index'),
      meta: {
        // title: '会员奖励',
        title:routesName.MemberBonus,
        icon: 'memberBonus',
        roles: ["admin","staff",]
      }
    }]
  },
  {
    path: '/admin/companyExpenses',
    component: Layout,
    children: [{
      path: 'index',
      name: 'companyExpenses',
      component: () => import('@/views/admin/companyExpenses/index'),
      meta: {
        // title: '公司费用',
        title:routesName.CompanyExpenses,
        icon: 'companyExpenses',
        roles: ["admin","staff",]
      }
    }]
  },
  // 用户路由
  {
    path: '/user/profile',
    component: Layout,
    children: [{
      path: 'index',
      name: 'profile',
      component: () => import('@/views/user/profile/index'),
      meta: {
        // title: '我的信息',
        title:routesName.MyProfile,
        icon: 'user',
        roles: ["user",]
      }
    }]
  },
  {
    path: '/user/home',
    component: Layout,
    children: [{
      path: 'index',
      name: 'home',
      component: () => import('@/views/user/home/index'),
      meta: {
        // title: '我的总结',
        title:routesName.MyProfit,
        icon: 'home',
        roles: ["user",]
      }
    }]
  },
  {
    path: '/user/downlineAgent',
    component: Layout,
    children: [{
      path: 'index',
      name: 'downlineAgent',
      component: () => import('@/views/user/downlineAgent/index'),
      meta: {
        // title: '下线代理总结',
        title:routesName.DownlineAgent,
        icon: 'zj',
        roles: ["user",]
      }
    }]
  },
  {
    path: '/user/downlineMember',
    component: Layout,
    children: [{
      path: 'index',
      name: 'downlineMember',
      component: () => import('@/views/user/downlineMember/index'),
      meta: {
        // title: '下线会员总结',
        title:routesName.DownlineMember,
        icon: 'zj',
        roles: ["user",]
      }
    }]
  },
  {
    path: '/user/downline',
    component: Layout,
    children: [{
      path: 'index',
      name: 'downline',
      component: () => import('@/views/user/downline/index'),
      meta: {
        // title: '下线',
        title:routesName.Downline,
        icon: 'downline',
        roles: ["user",]
      }
    }]
  },
  {
    path: '/user/pointDetail',
    component: Layout,
    children: [{
      path: 'index',
      name: 'userPointDetail',
      component: () => import('@/views/user/pointDetail/index'),
      meta: {
        // title: '上下分明细',
        title:routesName.TopupWithdraw,
        icon: 'point',
        roles: ["user",]
      }
    }]
  },
  {
    path: '/user/pointTransferDetail',
    component: Layout,
    children: [{
      path: 'index',
      name: 'pointTransferDetail',
      component: () => import('@/views/user/pointTransferDetail/index'),
      meta: {
        // title: '积分转移明细',
        title:routesName.PointTransfer,
        icon: 'pointTransferDetail',
        roles: ["user",]
      }
    }]
  },
  {
    path: '/user/creditDetail',
    component: Layout,
    children: [{
      path: 'index',
      name: 'userCreditDetail',
      component: () => import('@/views/user/creditDetail/index'),
      meta: {
        // title: '信用额度明细',
        title:routesName.CreditLimit,
        icon: 'credit',
        roles: ["user",]
      }
    }]
  },
  // {
  //   path: '/user/editDownline',
  //   component: Layout,
  //   children: [{
  //     path: 'index',
  //     name: 'editDownline',
  //     component: () => import('@/views/user/editDownline/index'),
  //     meta: {
  //       title: '编辑下线信息',
  //       icon: 'edit',
  //       roles: ["user",]
  //     }
  //   }]
  // },
  
  
  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

// const createRouter = () => new Router({
//   // mode: 'history', // require service support
//   scrollBehavior: () => ({
//     y: 0
//   }),
//   routes: constantRoutes
// })
// const router = createRouter()

// // Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
// export function resetRouter() {
//   const newRouter = createRouter()
//   router.matcher = newRouter.matcher // reset router
// }

// export default router

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();
export function resetRouter () {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
