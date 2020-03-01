(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{108:function(t,s,a){"use strict";a.r(s);var e=a(3),c=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("쉘파일에 필요한 부분만 복사하여 바로 사용할 수 있습니다. 초기스크립트는 반드시 포함하고 필요한 설정등을 복붙하여\n사용할 수 있습니다.")]),t._v(" "),a("h3",{attrs:{id:"스크립트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#스크립트"}},[t._v("#")]),t._v(" 스크립트")]),t._v(" "),a("h4",[t._v("초기스크립트")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('echo "# 시스템 방화벽 설정 " > /etc/sysconfig/iptables\necho ":INPUT ACCEPT [0:0] " >> /etc/sysconfig/iptables\necho ":FORWARD ACCEPT [0:0] " >> /etc/sysconfig/iptables\necho ":OUTPUT ACCEPT [0:0] " >> /etc/sysconfig/iptables\n')])])]),a("h4",[t._v("Handshake 허용")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('echo "-A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT" >> /etc/sysconfig/iptables\n')])])]),a("h4",[t._v("내부네트워크 허용")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('echo "-A INPUT -i lo -j ACCEPT" >> /etc/sysconfig/iptables\n')])])]),a("h4",[t._v("SSH허용")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('echo "-A INPUT -m state --state NEW -m tcp -p tcp --dport 22 -j ACCEPT" >> /etc/sysconfig/iptables\n')])])]),a("h4",[t._v("Handshake 허용")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('echo "-A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT" >> /etc/sysconfig/iptables\n')])])]),a("h4",[t._v("FTP 허용")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('echo "-A INPUT -m state --state NEW -m tcp -p tcp --dport 20 -j ACCEPT" >> /etc/sysconfig/iptables\necho "-A INPUT -m state --state NEW -m tcp -p tcp --dport 21 -j ACCEPT" >> /etc/sysconfig/iptables\n')])])]),a("h4",[t._v("SMTP 허용")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('echo "-A INPUT -m state --state NEW -m tcp -p tcp --dport 25 -j ACCEPT" >> /etc/sysconfig/iptables\n')])])]),a("h4",[t._v("HTTP허용")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('echo "-A INPUT -m state --state NEW -m tcp -p tcp --dport 80 -j ACCEPT" >> /etc/sysconfig/iptables\n')])])]),a("h4",[t._v("허용 이외에 모두 차단")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('echo "-A INPUT -j REJECT --reject-with icmp-host-prohibited" >> /etc/sysconfig/iptables\n')])])]),a("p",[t._v("우선수위는 위로갈수록 높기때문에 모든 차단은 하단에 위치합니다.")]),t._v(" "),a("h4",[t._v("DNS 허용")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('echo "-A INPUT -m state --state NEW -m udp -p udp --dport 53 -j ACCEPT" >> /etc/sysconfig/iptables\n')])])]),a("h3",{attrs:{id:"이외에-보안과-관련된-추가적인-패킷설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#이외에-보안과-관련된-추가적인-패킷설정"}},[t._v("#")]),t._v(" 이외에 보안과 관련된 추가적인 패킷설정")]),t._v(" "),a("h4",[t._v("Null 패킷 차단(정찰패킷)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('echo "-A INPUT -p tcp ! --syn -m state --state NEW -j DROP"\n')])])]),a("h4",[t._v("XMAS패킷차단(정찰패킷)")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-A INPUT -p tcp --tcp-flags ALL ALL -j DROP"')]),t._v("\n")])])]),a("h4",[t._v("SYN패킷차단")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-A INPUT -p tcp ! --syn -m state --state NEW -j DROP"')]),t._v("\n")])])]),a("h4",[t._v("적용하기")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('echo "COMMIT" >> /etc/sysconfig/iptables\nservice iptables start\n')])])]),a("p",[t._v("적용한 사항을 iptables에 명시한 후 iptables 시작합니다.")])])}),[],!1,null,null,null);s.default=c.exports}}]);