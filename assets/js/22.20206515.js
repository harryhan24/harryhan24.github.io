(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{106:function(s,a,e){"use strict";e.r(a);var t=e(3),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("Centos 기존에 아래와같이 도커를 설치했을경우 에러가 발생했습니다.")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#버전호환문제로 error가 발생")]),s._v("\nyum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y yum-utils device-mapper-persistent-data lvm2\nyum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\nyum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y docker-ce\n")])])]),e("p",[s._v("Docker는 엔터프라이즈 버전과 커뮤니티 버전(CE)가 존재하며 커뮤니티 버전의 경우 cantos에서의 버전지원문제가 있다고 합니다.")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 저장소추가")]),s._v("\ndnf config-manager --add-repo"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://download.docker.com/linux/centos/docker-ce.repo\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 저장소확인")]),s._v("\ndnf list docker-ce "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Docker CE Stable이 보여야합니다.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 설치하기")]),s._v("\ndnf "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce --nobest -y\n\n")])])]),e("blockquote",[e("p",[e("strong",[s._v("dnf명령어란?")]),s._v("\nRPM 기반 리눅스 배포판을 위한 패키지 관리도구입니다. 만약 "),e("code",[s._v("dnf --version")]),s._v(" 커맨드로 아무것도 출력되지 않는다면 "),e("code",[s._v("yum install dnf")]),s._v(" 커맨드로 설치합니다.")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 서비스 시작")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" docker start\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 재시동시 자동으로 시작되도록 등록")]),s._v("\nsystemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" docker\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 도커 버전 확인")]),s._v("\ndocker -v\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 도커구동 간단한 테스트")]),s._v("\ndocker run hello-world\n")])])]),e("p",[s._v('테스트 수행 후 "Hello From Docker!"가 출력된다면 정상적으로 설치되었습니다.')]),s._v(" "),e("h2",{attrs:{id:"docker-compose-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-설치"}},[s._v("#")]),s._v(" Docker Compose 설치")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/docker/compose/releases/download/1.25.0/docker-compose-'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -s"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("-"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -m"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" -o /usr/local/bin/docker-compose\n")])])]),e("p",[s._v("만약 curl이 설치되어있지 않다면 "),e("code",[s._v("dnf install curl -y")]),s._v(" 명령어를 먼저 수행합니다.")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#실행권한부여")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/docker-compose\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#버전확인")]),s._v("\ndocker-compose --version\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);