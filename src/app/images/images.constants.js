/**
 * Created by mauro on 02/04/16.
 */
(function () {
  'use strict';

  angular
    .module('app.images')
    .constant('mockImages', [
      {
        "Id": "sha256:03687a5565ea7e1b5bd8feb89b50550dad6ee50b443bd104fa69ab77a724e9dc",
        "RepoTags": [
          "registry.access.redhat.com/rhel:latest",
          "rhel:latest"
        ],
        "Created": 1449072331,
        "Size": 201659397,
        "VirtualSize": 201659397,
        "Labels": {
          "Architecture": "x86_64",
          "Authoritative_Registry": "registry.access.redhat.com",
          "BZComponent": "rhel-server-docker",
          "Build_Host": "rcm-img04.build.eng.bos.redhat.com",
          "Name": "rhel7/rhel",
          "Release": "38",
          "Vendor": "Red Hat, Inc.",
          "Version": "7.2"
        }
      },
      {
        "Id": "sha256:084a5b3170cb398a09701adfd47edea190becfef2e4947752b2e3f41fa36eb87",
        "RepoTags": [
          "gitlab/gitlab-ce:latest"
        ],
        "Created": 1458119802,
        "Size": 1069648430,
        "VirtualSize": 1069648430
      },
      {
        "Id": "sha256:19641432f4c0a14ae08804061f93ca16e5322eb135fe66a1ad4827ad26c08f20",
        "RepoTags": [
          "jfrog-docker-registry.bintray.io/jfrog/artifactory-oss:latest"
        ],
        "Created": 1446389006,
        "Size": 400077530,
        "VirtualSize": 400077530,
        "ParentId": "sha256:878e202147ff8f2eb7b2166d9eeaf711d666b3064d9e25d598309c82a20a505f"
      },
      {
        "Id": "sha256:1d32d1b6ba2b799b67b4322f092f513c5195d1b69b31fe84992eb44c59406db0",
        "RepoTags": [
          "mesosphere/mesos-slave:0.26.0-0.2.145.ubuntu1404"
        ],
        "Created": 1450311584,
        "Size": 527804016,
        "VirtualSize": 527804016,
        "ParentId": "sha256:93b420c7944d6a2c8ad13da4ef75aa2f40aa09b4adbb326a9d0d08d577d1630f"
      },
      {
        "Id": "sha256:234d7a075c98eede7f37202f0299f763f3346d32470296ef0c42e84b6474f2fd",
        "RepoTags": [
          "jenkins:latest"
        ],
        "Created": 1452266952,
        "Size": 708114729,
        "VirtualSize": 708114729,
        "ParentId": "sha256:b7714f0dbaf2c89b1ab83dde8c08fff29aa326413891eb8c6d076d159ba1f803"
      },
      {
        "Id": "sha256:26db1f6b313ddfac88d3b58f0ee2118f47a9936f505ce8262bae41f52a3bd65c",
        "RepoTags": [
          "deploy_mysql:latest"
        ],
        "Created": 1458210451,
        "Size": 324254483,
        "VirtualSize": 324254483,
        "ParentId": "sha256:a8cda722473f6238341839b782104ed45d555cef82c725a505b08578b77401b1"
      },
      {
        "Id": "sha256:2eaf48f13e91e1272cf6bb0c7b1ce506ba3bdf43b49096a49387c6a4a9afaf5a",
        "RepoTags": [
          "<none>:<none>"
        ],
        "Created": 1458210526,
        "Size": 709293427,
        "VirtualSize": 709293427,
        "ParentId": "sha256:e62abe1305a501f980489548be017113c16244b738d58de2651e697a5bfad6b3",
        "RepoDigests": [
          "<none>@<none>"
        ]
      },
      {
        "Id": "sha256:2eb3c4c030f24845cb79e8b58ffbc80f3bd2e6b810b5a4c8955512c1df197304",
        "RepoTags": [
          "mesosphere/chronos:chronos-2.4.0-0.1.20151007110204.ubuntu1404-mesos-0.24.1-0.2.35.ubuntu1404"
        ],
        "Created": 1444217338,
        "Size": 608601143,
        "VirtualSize": 608601143,
        "ParentId": "sha256:d158cb442118156a15fa9b3b5b0a5893a74751cdb15433592941d115d89c1c4d"
      },
      {
        "Id": "sha256:3876b81b5a81678926c601cd842040a69eb0456d295cd395e7a895a416cf7d91",
        "RepoTags": [
          "ubuntu:latest"
        ],
        "Created": 1453246284,
        "Size": 187899635,
        "VirtualSize": 187899635,
        "ParentId": "sha256:039f1bb3922f20162d1f2e43dc308a21fb975eed0990f31fedd0cc19b4e335ab"
      },
      {
        "Id": "sha256:3a9a3a8f64236b1fa52870ed82ac9191508ff25cf7cb1351b519995b035a25ec",
        "RepoTags": [
          "mesosphere/marathon:v0.15.0-RC3"
        ],
        "Created": 1453930600,
        "Size": 818176635,
        "VirtualSize": 818176635,
        "ParentId": "sha256:6e48ee6452839cad30e5f8adb726f1fe989c0dd54b24cb1f233296e3c8339bbe"
      },
      {
        "Id": "sha256:3ac9ed8ea31161ad517b93c35885527d633a23f8098890bc1eb60a49c5df3bca",
        "RepoTags": [
          "elasticsearch:latest"
        ],
        "Created": 1456944105,
        "Size": 346595451,
        "VirtualSize": 346595451
      },
      {
        "Id": "sha256:3cb1bf271f8c81fbaeddbfe9296285bbf75186663c3508014700da4be7eeae76",
        "RepoTags": [
          "gocd/gocd-agent:latest"
        ],
        "Created": 1455700455,
        "Size": 453419169,
        "VirtualSize": 453419169
      },
      {
        "Id": "sha256:4045d5284714e966a37b8bfdaf480228a84031587a0db694299f894894afbfde",
        "RepoTags": [
          "nginx:latest"
        ],
        "Created": 1450286958,
        "Size": 133816162,
        "VirtualSize": 133816162,
        "ParentId": "sha256:e8887e39d8a2d21aba8c3aaa0ef29230bab52882106701c17fc1570a72da9008"
      },
      {
        "Id": "sha256:4df728e7f65f60bc73eaf98883b70c8a08cb60d4b9fb82df21abd7a2169cba3b",
        "RepoTags": [
          "evarga/jenkins-slave:latest"
        ],
        "Created": 1419452556,
        "Size": 610745432,
        "VirtualSize": 610745432,
        "ParentId": "sha256:34ebf02342f11bc5074b431a4062af66d6972cbc171d8093578a584f4a233ca1"
      },
      {
        "Id": "sha256:54060fb55e8320da8c7568a615ad903e1078a1a40f2441f31c3835fdbed1f984",
        "RepoTags": [
          "ubuntu:14.04"
        ],
        "Created": 1426832207,
        "Size": 188274656,
        "VirtualSize": 188274656,
        "ParentId": "sha256:cebb0bc82c4cf03868f2148bb03f9d38b20153dbc5ee18d28cfea5c5ae123381"
      },
      {
        "Id": "sha256:5eaced67751b30c190680d60b2b4812876003eaf5d69d39da61fb4a6b715664d",
        "RepoTags": [
          "registry:2.3.0"
        ],
        "Created": 1456932677,
        "Size": 165721468,
        "VirtualSize": 165721468
      },
      {
        "Id": "sha256:63e6ca37d7f40656254e112ff4ccd46a83a022623048de933a33c1f036bdc896",
        "RepoTags": [
          "busybox:latest",
          "localhost:5000/busybox:latest"
        ],
        "Created": 1429308073,
        "Size": 2429728,
        "VirtualSize": 2429728,
        "ParentId": "sha256:d052f4af80e9ea76df7d4933e230352039135ef6fb302774e402b30d8ff707d3"
      },
      {
        "Id": "sha256:6403f0bc35721ff97e5659e6bc4cf61e0e15abcffe09c060bbc2611b1cff0f02",
        "RepoTags": [
          "gi4nks/fluentd-es:latest"
        ],
        "Created": 1457356608,
        "Size": 813977894,
        "VirtualSize": 813977894
      },
      {
        "Id": "sha256:6fae60ef344644649a39240b94d73b8ba9c67f898ede85cf8e947a887b3e6557",
        "RepoTags": [
          "training/webapp:latest"
        ],
        "Created": 1431710615,
        "Size": 348721978,
        "VirtualSize": 348721978,
        "ParentId": "sha256:efcef8076f3bd41ff3e77871759aced2634c1fe0d4ea8584ff4c3272690cd5dd"
      },
      {
        "Id": "sha256:70c557e50ed630deed07cbb0dc4d28aa0f2a485cf7af124cc48f06bce83f784b",
        "RepoTags": [
          "alpine:3.3"
        ],
        "Created": 1456938960,
        "Size": 4797951,
        "VirtualSize": 4797951
      },
      {
        "Id": "sha256:778733182d2302f0d48618ab5665884870783370853cc8b3ff30ee2f6fbc9fbd",
        "RepoTags": [
          "gi4nks/docker-jenkinsci-android:latest"
        ],
        "Created": 1436965369,
        "Size": 926785083,
        "VirtualSize": 926785083,
        "ParentId": "sha256:61b7426bb235789438b0b3fb20e14dcff9f262666e9fa00cccc890ba944e7c32"
      },
      {
        "Id": "sha256:7edc5318211c639e21e3e467a885e7f630f6809ada552e488b929d48484d6380",
        "RepoTags": [
          "postgres:latest"
        ],
        "Created": 1452709520,
        "Size": 270651097,
        "VirtualSize": 270651097,
        "ParentId": "sha256:fc5f800df9122912a3852afa5779789d9984c0ff446a68b823b15c985ac36071"
      },
      {
        "Id": "sha256:843d89a929651cdabbb4ad48b8117291341e5e7db90d2ece6011fc6a13aec351",
        "RepoTags": [
          "dockerui/dockerui:latest"
        ],
        "Created": 1450156553,
        "Size": 6131973,
        "VirtualSize": 6131973,
        "ParentId": "sha256:25f6d769d2a17626e2d00a57f39794a1b47e1549c2d423becd0afaaa6b965b8f"
      },
      {
        "Id": "sha256:852b8b0da278d0fd059bc717263596045b72166cc0f8a6307a97b4140d6ef062",
        "RepoTags": [
          "gocd/gocd-server:latest"
        ],
        "Created": 1455702893,
        "Size": 730915302,
        "VirtualSize": 730915302
      },
      {
        "Id": "sha256:85768f62af8a5d959387381ab24bb3e8c2aa34fb6bbe2490049241712b629a60",
        "RepoTags": [
          "codeskyblue/docker-gogs:latest"
        ],
        "Created": 1435207889,
        "Size": 788155479,
        "VirtualSize": 788155479,
        "ParentId": "sha256:ad70d758ae5b1b0659e75ff14697098461f35d5221d37e9a5cf069eddae50238"
      },
      {
        "Id": "sha256:9925548e3218de4fdbfc721e19a0d9a7492954225cd63e4a629e7388e968ef11",
        "RepoTags": [
          "rancher/server:latest"
        ],
        "Created": 1450889187,
        "Size": 844956699,
        "VirtualSize": 844956699,
        "ParentId": "sha256:397d72ea2e1d9a0c9057ad6b7f3665ad1f1f49907c62bbea18d81a873a22c234"
      },
      {
        "Id": "sha256:a185ad8993f69fba33dad1b351bd6a65bf9185fd092e843ddb1219e79602ee07",
        "RepoTags": [
          "mesoscloud/zookeeper:3.4.6-centos-7"
        ],
        "Created": 1454477393,
        "Size": 470189417,
        "VirtualSize": 470189417,
        "ParentId": "sha256:b9939825dc226c9d2ea141cce107d286909ae956d3786930159e37d7770f95d6",
        "Labels": {
          "build-date": "2015-12-23",
          "license": "GPLv2",
          "name": "CentOS Base Image",
          "vendor": "CentOS"
        }
      },
      {
        "Id": "sha256:adacc7f79508bf8e5b2d7e40ea852ffe1c2e6e21d07666c5fc8cefef690abec8",
        "RepoTags": [
          "mesosphere/mesos-master:0.26.0-0.2.145.ubuntu1404"
        ],
        "Created": 1450311584,
        "Size": 527804016,
        "VirtualSize": 527804016,
        "ParentId": "sha256:500d9c1f40ec07649bf66e9e2f7b134115d4a3ebc64e5a0f118c39ecf4536d2f"
      },
      {
        "Id": "sha256:b4698bb78ac3ad1294233d72a13e1f4b444b7fae602b17bb96d5d896a8508bcc",
        "RepoTags": [
          "deploy_log:latest"
        ],
        "Created": 1458210429,
        "Size": 188276672,
        "VirtualSize": 188276672,
        "ParentId": "sha256:cb212e23075eda582540791031d2cbfa178c6d8e9f0166a88f39df0988131eaf"
      },
      {
        "Id": "sha256:bc5beaf307231001dc40efd50d3290393fc3c19e2b17292d9535726adde2e1b1",
        "RepoTags": [
          "ruby:2.2.0"
        ],
        "Created": 1422413230,
        "Size": 774677383,
        "VirtualSize": 774677383
      },
      {
        "Id": "sha256:bd9442526497891ad6455590e0ab984f34602fa1722922d434eb79711a588afd",
        "RepoTags": [
          "gi4nks/mvn-volume:1.0.0",
          "gi4nks/mvn-volume:latest"
        ],
        "Created": 1439905397,
        "Size": 2429728,
        "VirtualSize": 2429728,
        "ParentId": "sha256:2f795e7338c4623e833f149d01f142aaa926dbac64161af6c6646c29bf325851"
      },
      {
        "Id": "sha256:c0a1cf8843c3072fdb7d032583dd6461c0e10fae7ea5a1fa2343dfced5f6cb84",
        "RepoTags": [
          "kibana:latest"
        ],
        "Created": 1456953840,
        "Size": 289825724,
        "VirtualSize": 289825724
      },
      {
        "Id": "sha256:c648cd6a73969d01003f84dcb558aa19f153fdbb63f6e7bc096cf204c1d46280",
        "RepoTags": [
          "debian:jessie"
        ],
        "Created": 1452128831,
        "Size": 125090240,
        "VirtualSize": 125090240,
        "ParentId": "sha256:440e9f8ae5cb10857c9b901fe6ed10eb9aa67b997981d16bc4d52f3713908f4e"
      },
      {
        "Id": "sha256:cf16c37ce396bb2ccdaf94ff97ee9ed3d1bf9d52a8391f917da8864b7f576709",
        "RepoTags": [
          "prom/prometheus:latest"
        ],
        "Created": 1452526285,
        "Size": 57980332,
        "VirtualSize": 57980332,
        "ParentId": "sha256:a2d3511c2391004cd85a82a07753c2a906c037983c253d2af80c91a77e691102"
      },
      {
        "Id": "sha256:d10e4c3e7ec976f313d8f650d1c779bd5fb8783866763f12e4831510c135d8fd",
        "RepoTags": [
          "httpd:2.4",
          "httpd:latest"
        ],
        "Created": 1456952985,
        "Size": 193364202,
        "VirtualSize": 193364202
      },
      {
        "Id": "sha256:d397b5e0f5de6a1f445dbf49b4e6925a9d175b2fbf0ba39900ee0fb171ecbb0b",
        "RepoTags": [
          "owncloud:9.0",
          "owncloud:latest"
        ],
        "Created": 1457500613,
        "Size": 687758992,
        "VirtualSize": 687758992
      },
      {
        "Id": "sha256:d4a69ef1bc5373c388db94b89d47afb22cf7bbe1c57d6426eec13f51dea05fb6",
        "RepoTags": [
          "gi4nks/sample2:latest"
        ],
        "Created": 1458810434,
        "Size": 4797951,
        "VirtualSize": 4797951,
        "ParentId": "sha256:fbf04f47e0989410aa77be97c6360cffc3799acbe66eea12e28e59a0c89b6ff6",
        "Labels": {
          "com.example.is-beta": "",
          "com.example.is-production": "",
          "com.example.release-date": "2016-03-23",
          "com.example.version": "0.0.1-beta",
          "vendor": "ACME Incorporated"
        }
      },
      {
        "Id": "sha256:dfb642b4afbebc64f28a18a679a50b62a292e63492620667cdeba5da81123493",
        "RepoTags": [
          "<none>:<none>"
        ],
        "Created": 1458125004,
        "Size": 4797951,
        "VirtualSize": 4797951,
        "ParentId": "sha256:c2c72cfac757fd6f11c9333df47f7cef96199d840fa74dc35d9df47a31def76e",
        "RepoDigests": [
          "<none>@<none>"
        ],
        "Labels": {
          "ch.post.a-base.image-specs": "{\"Description\":\"A base alpine image\",\"Usage\":\"docker run --rm gi4nks\\\\/a-base [args]\",\"License\":\"Apache\",\"Version\":\"0.0.1-beta\",\"aBoolean\":true,\"aNumber\":0.01234,\"aNestedArray\":[\"a\",\"b\",\"c\"]}"
        }
      },
      {
        "Id": "sha256:e62abe1305a501f980489548be017113c16244b738d58de2651e697a5bfad6b3",
        "RepoTags": [
          "golang:1.5.1"
        ],
        "Created": 1448042253,
        "Size": 709293427,
        "VirtualSize": 709293427
      },
      {
        "Id": "sha256:ef74b4bb871507daa3a544c31dbe644709c54e321a43105db2b055ecadeda3a1",
        "RepoTags": [
          "gi4nks/sample:latest"
        ],
        "Created": 1458125645,
        "Size": 4797951,
        "VirtualSize": 4797951,
        "ParentId": "sha256:1f395cfd519aee18fdeac061e51779cecd392bd9daeee00bce50bd77a6abf46c",
        "Labels": {
          "com.example.is-beta": "",
          "com.example.is-production": "",
          "com.example.release-date": "2015-02-12",
          "com.example.version": "0.0.1-beta",
          "vendor": "ACME Incorporated"
        }
      },
      {
        "Id": "sha256:f001372a7d0bb364b92c5756bd69f7c7e9939ecb4091671529ecc41891e3b147",
        "RepoTags": [
          "alpine:3.2",
          "alpine:latest"
        ],
        "Created": 1434137895,
        "Size": 5250015,
        "VirtualSize": 5250015
      },
      {
        "Id": "sha256:f44353327cb6e126f69a2d4d168cfa443374fab3df3c48148a66b5ae2a897592",
        "RepoTags": [
          "mysql:5.6"
        ],
        "Created": 1457996302,
        "Size": 324249025,
        "VirtualSize": 324249025
      },
      {
        "Id": "sha256:f529434ac56491a0873cfac78e6fa359b1a53fb7707a24a5bf07a8f23efbe319",
        "RepoTags": [
          "google/cadvisor:latest"
        ],
        "Created": 1443800413,
        "Size": 22773504,
        "VirtualSize": 22773504,
        "ParentId": "sha256:2449e3fa1b3f4b6e3e9e79a082d4d39b1b6c45fa7c8b3495d71b731229c599bf"
      }
    ]);
})();
