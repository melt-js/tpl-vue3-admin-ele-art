import{m as y,q as i,t as E,L as h,M as s,N as p,W as n,y as l,x as t,A as m,aa as R,ab as C,ac as z,ad as w,d as P}from"./index-1zN-xvOy.js";import{a as A}from"./loadApp-DksI2i2k.js";const U={class:"w-full py-2"},V={class:"mb-6"},N={class:"m-0 mb-2 text-xl font-medium"},S={class:"mb-6"},T={class:"flex-c gap-5"},k={class:"my-1 text-sm text-g-700"},I={class:"font-semibold"},M={class:"my-1 text-sm text-g-700"},B={class:"mb-6 last:mb-0"},D={class:"best-practices"},L={class:"practices-content"},F={class:"flex-c"},q={class:"size-10 bg-g-200 flex-cc rounded mr-2"},W={class:"flex-c"},$={class:"size-10 bg-g-200 flex-cc rounded mr-2"},j={class:"flex-c"},G={class:"size-10 bg-g-200 flex-cc rounded mr-2"},H={class:"flex-c"},J={class:"size-10 bg-g-200 flex-cc rounded mr-2"},X=y({name:"PermissionPageVisibility",__name:"index",setup(K){const x=A(),c=P(()=>x.info),_=u=>({R_SUPER:"超级管理员",R_ADMIN:"管理员",R_USER:"普通用户"})[u]||"未知角色";return(u,e)=>{const f=i("ElTag"),o=i("ElCard"),r=i("ElTimelineItem"),b=i("ElTimeline"),a=i("ElIcon"),d=i("ElCol"),v=i("ElRow");return E(),h("div",U,[s("div",V,[s("h2",N,p(u.$t("menus.examples.permission.pageVisibility")),1),e[0]||(e[0]=s("p",{class:"m-0 text-sm leading-[1.6] text-g-700"},[n(" 此页面仅对"),s("strong",{class:"font-semibold text-warning"},"超级管理员"),n("用户可见，演示页面级别的权限控制。 如果您能看到此页面，说明您拥有相应的访问权限。 ")],-1))]),s("div",S,[l(o,{class:"art-card-xs"},{header:t(()=>[...e[1]||(e[1]=[s("div",{class:"flex-c gap-2 font-semibold"},[s("span",null,"权限验证成功")],-1)])]),default:t(()=>[s("div",null,[s("div",T,[s("div",null,[e[4]||(e[4]=s("h3",{class:"m-0 mb-2 text-lg font-semibold"},"您拥有访问此页面的权限",-1)),s("p",k,[e[2]||(e[2]=n(" 当前用户：",-1)),s("strong",I,p(c.value.userName),1)]),s("p",M,[e[3]||(e[3]=n(" 用户角色： ",-1)),l(f,{type:"warning"},{default:t(()=>{var g;return[n(p(_(((g=c.value.roles)==null?void 0:g[0])||"")),1)]}),_:1})])])])])]),_:1})]),s("div",B,[l(o,{class:"art-card-xs"},{header:t(()=>[...e[5]||(e[5]=[s("div",{class:"flex-c font-semibold"},[s("span",null,"页面级权限控制说明")],-1)])]),default:t(()=>[s("div",null,[l(b,null,{default:t(()=>[l(r,{timestamp:"前端控制模式",type:"primary",size:"large"},{default:t(()=>[l(o,null,{default:t(()=>[...e[6]||(e[6]=[s("h4",{class:"m-0 mb-2 text-base font-semibold"},"基于角色的权限控制",-1),s("p",{class:"m-0 mb-2 leading-[1.6] text-g-700"},[n(" 在前端控制模式下，页面访问权限由路由配置文件中的 "),s("code",{class:"px-1.5 py-0.5 font-mono text-xs text-theme bg-theme/12 rounded"},"meta.roles"),n(" 字段定义，前端会根据用户接口所拥有的角色对路由和菜单进行过滤与控制 ")],-1),s("pre",{class:"p-4 mt-3 mb-0 overflow-x-auto font-mono text-xs leading-[1.5] bg-g-200 border-full-d rounded-md"},[s("code",{class:""},`{
  path: 'page-visibility',
  name: 'PermissionPageVisibility',
  component: '/examples/permission/page-visibility',
  meta: {
    title: 'menus.permission.pageVisibility',
    roles: ['R_SUPER'], // 仅超级管理员可访问
    keepAlive: true
  }
}`)],-1),s("p",{class:"m-0 mb-2 leading-[1.6] text-g-700"},[s("strong",null,"权限验证流程：")],-1),s("ul",{class:"pl-5 my-2"},[s("li",{class:"my-1 leading-[1.5] text-g-700"},"用户登录后，接口返回用户角色信息（如 R_SUPER、R_ADMIN、R_USER）"),s("li",{class:"my-1 leading-[1.5] text-g-700"},[n(" 在 "),s("code",{class:"px-1.5 py-0.5 font-mono text-xs text-theme bg-theme/12 rounded"},"beforeEach"),n(" 路由守卫中检查目标路由的 "),s("code",{class:"px-1.5 py-0.5 font-mono text-xs text-theme bg-theme/12 rounded"},"roles"),n(" 配置 ")]),s("li",{class:"my-1 leading-[1.5] text-g-700"},"比较用户角色是否包含在允许访问的角色列表中"),s("li",{class:"my-1 leading-[1.5] text-g-700"},"权限不足时跳转到 403 页面")],-1)])]),_:1})]),_:1}),l(r,{timestamp:"后端控制模式",type:"warning",size:"large"},{default:t(()=>[l(o,null,{default:t(()=>[...e[7]||(e[7]=[s("h4",{class:"m-0 mb-2 text-base font-semibold"},"基于菜单接口的权限控制",-1),s("p",{class:"m-0 mb-2 leading-[1.6] text-g-700"},"在后端控制模式下，页面访问权限由后端统一管理，前端通过解析后端接口返回的菜单列表来生成可访问的路由，从而实现权限控制",-1),s("p",{class:"m-0 mb-2 leading-[1.6] text-g-700"},"接口地址：src/api/menuApi.ts getMenuList",-1),s("pre",{class:"p-4 mt-3 mb-0 overflow-x-auto font-mono text-xs leading-[1.5] bg-g-200 border-full-d rounded-md"},[s("code",{class:""},`
{
  "code": 200,
  "data": [
    {
      "id": 1,
      "path": "/permission",
      "name": "Permission",
      "component": "Layout",
      "meta": {
        "title": "menus.permission.title",
        "icon": ""
      },
      "children": [
        {
          "id": 11,
          "path": "page-visibility",
          "name": "PermissionPageVisibility",
          "component": "permission/page-visibility/index",
          "meta": {
            "title": "menus.permission.pageVisibility",
            "keepAlive": true
          }
        }
      ]
    }
  ]
}`)],-1),s("p",null,[s("strong",null,"权限验证流程：")],-1),s("ul",null,[s("li",null,"用户登录成功后获取 Token"),s("li",null,"前端调用菜单接口获取用户可访问的菜单列表"),s("li",null,"前端根据菜单列表动态注册路由"),s("li",null,"菜单中存在的页面用户可以正常访问，不存在的页面会跳转到 404")],-1)])]),_:1})]),_:1}),l(r,{timestamp:"菜单显示控制",type:"success",size:"large"},{default:t(()=>[l(o,null,{default:t(()=>[...e[8]||(e[8]=[s("h4",null,"侧边栏菜单可见性",-1),s("p",null,[s("strong",null,"前端控制模式：")],-1),s("ul",null,[s("li",null,"有权限的用户：菜单项正常显示，可以点击访问"),s("li",null,"无权限的用户：菜单项不显示，无法通过菜单导航到页面"),s("li",null,"即使通过直接输入URL尝试访问，也会被路由守卫拦截")],-1),s("p",null,[s("strong",null,"后端控制模式：")],-1),s("ul",null,[s("li",null,"侧边栏菜单根据后端返回的菜单列表进行渲染"),s("li",null,"后端应该根据用户权限过滤，只返回用户有权限访问的菜单项"),s("li",null,"前端只显示后端返回的菜单，确保用户只能看到和访问有权限的页面")],-1)])]),_:1})]),_:1})]),_:1})])]),_:1})]),s("div",D,[l(o,{class:"art-card-xs"},{header:t(()=>[...e[9]||(e[9]=[s("div",{class:"card-header"},[s("span",null,"权限控制最佳实践")],-1)])]),default:t(()=>[s("div",L,[l(v,{gutter:24},{default:t(()=>[l(d,{span:12,class:"!mb-5"},{default:t(()=>[s("div",F,[s("div",q,[l(a,{size:"20",color:"#409EFF"},{default:t(()=>[l(m(R))]),_:1})]),e[10]||(e[10]=s("div",null,[s("h4",null,"多层权限验证"),s("p",{class:"text-g-700 text-sm"},"在前端路由、后端接口、UI组件等多个层面实施权限控制，确保安全性。")],-1))])]),_:1}),l(d,{span:12},{default:t(()=>[s("div",W,[s("div",$,[l(a,{size:"20",color:"#67C23A"},{default:t(()=>[l(m(C))]),_:1})]),e[11]||(e[11]=s("div",null,[s("h4",null,"基于角色的访问控制"),s("p",{class:"text-g-700 text-sm"},"采用RBAC模型，通过角色分配权限，简化权限管理复杂度。")],-1))])]),_:1}),l(d,{span:12},{default:t(()=>[s("div",j,[s("div",G,[l(a,{size:"20",color:"#E6A23C"},{default:t(()=>[l(m(z))]),_:1})]),e[12]||(e[12]=s("div",null,[s("h4",null,"细粒度权限控制"),s("p",{class:"text-g-700 text-sm"},"支持页面级、按钮级、数据级等多种粒度的权限控制。")],-1))])]),_:1}),l(d,{span:12},{default:t(()=>[s("div",H,[s("div",J,[l(a,{size:"20",color:"#F56C6C"},{default:t(()=>[l(m(w))]),_:1})]),e[13]||(e[13]=s("div",null,[s("h4",null,"安全性优先原则"),s("p",{class:"text-g-700 text-sm"},"始终遵循最小权限原则，确保用户只能访问必要的功能和数据。")],-1))])]),_:1})]),_:1})])]),_:1})])])}}});export{X as default};
