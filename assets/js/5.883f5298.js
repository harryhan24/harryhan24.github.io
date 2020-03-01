(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{109:function(t,s,a){"use strict";a.r(s);var n=a(3),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("n8n은 직접 호스팅해서 사용 가능한 자동화 대시보드입니다. 특히 운영 중인 서버 등에 자동화 작업을 하기 위한 용도로 좋으며 라즈베리파이 같은 서버에서 개인적인 용도를 위한 자동화 작업을 더 쉽게 처리할 수 있습니다.")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("docker run -it --rm "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --name n8n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -p "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5678")]),t._v(":5678 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  n8nio/n8n\n")])])]),n("p",[t._v("역시나 도커를 사용하는 게 가장 편합니다. 포트는 5678이 기본으로 되어있습니다. 기본적으로 누구나 접근할 수 있게 되어있지만 추가적인 Credential 작업을 할 수 있습니다. 기본적으로는 로컬 데이터 시스템인 SQLite와 파일 데이터를 사용하는 것 같기만 원한다면 MongoDB, PostgresDB, MySQL 등과도 연동할 수 있습니다.")]),t._v(" "),n("h3",{attrs:{id:"mongodb를-사용할경우"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mongodb를-사용할경우"}},[t._v("#")]),t._v(" MongoDB를 사용할경우")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("docker run -it --rm "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --name n8n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -p "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5678")]),t._v(":5678 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DB_TYPE")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mongodb "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DB_MONGODB_CONNECTION_URL")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mongodb://<MONGO_USER>:<MONGO_PASSWORD>@<MONGO_SERVER>:<MONGO_PORT>/<MONGO_DATABASE>"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -v ~/.n8n:/root/.n8n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  n8nio/n8n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  n8n start\n")])])]),n("h3",{attrs:{id:"postgre"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#postgre"}},[t._v("#")]),t._v(" Postgre")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("docker run -it --rm "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --name n8n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -p "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5678")]),t._v(":5678 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DB_TYPE")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("postgresdb "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DB_POSTGRESDB_DATABASE")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("POSTGRES_DATABASE"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DB_POSTGRESDB_HOST")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("POSTGRES_HOST"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DB_POSTGRESDB_PORT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("POSTGRES_PORT"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DB_POSTGRESDB_USER")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("POSTGRES_USER"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DB_POSTGRESDB_PASSWORD")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("POSTGRES_PASSWORD"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -v ~/.n8n:/root/.n8n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  n8nio/n8n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  n8n start\n")])])]),n("p",[t._v("사용방법도 어렵지 않습니다.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(49),alt:""}})]),t._v(" "),n("p",[t._v("워크플로우란 [트리거]와 [액션]으로 작동되는 작업을 말하며 대부분 드래그 앤드 드롭으로 쉽게 만들 수 있습니다.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(50),alt:""}}),t._v("\n제공되는 Trigger들 또한 cron을 포함하여 상당히 많은 옵션을 제공합니다. 예를 들어 깃헙(Github)에서 커밋(Commit)이 되었을 때 테스트를 수행한다거나 빌드(Build)를 하는 작업등을 젠킨스(Jenkins)에 비해 비교적 쉽게 수행할 수 있습니다.\n"),n("img",{attrs:{src:a(51),alt:""}}),t._v("\n서로 이벤트를 연결하는 방법도 드래그만 하면 끝입니다. JSON 방식으로 서로 데이터를 주고받으며")]),t._v(" "),n("p",[n("img",{attrs:{src:a(52),alt:""}}),t._v("\nif 문 + error 문 혹은 switch 문, delay 문 등 동시에 두 개의 작업을 끝내야 하는 상황이나 혹은 에러를 처리하는 과정도 쉽게 구성할 수 있습니다.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(53),alt:""}}),t._v("\n모든 작업은 Workflow Execution에 기록되며 작업 내역 또한 이메일이나 슬랙으로 알림이 올 수 있게끔 워크플로우를 새로 만들 수 있습니다. 또한 워크플로우에서 워크플로우로의 호출도 가능합니다.")])])}),[],!1,null,null,null);s.default=r.exports},49:function(t,s,a){t.exports=a.p+"assets/img/50.5895f6ef.png"},50:function(t,s,a){t.exports=a.p+"assets/img/51.54fce10c.png"},51:function(t,s,a){t.exports=a.p+"assets/img/52.555366e3.png"},52:function(t,s,a){t.exports=a.p+"assets/img/53.6e531d4d.png"},53:function(t,s,a){t.exports=a.p+"assets/img/54.22316ad1.png"}}]);