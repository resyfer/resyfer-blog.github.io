(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[168],{8142:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mnemofs/intro_p1",function(){return n(2335)}])},2335:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return d},next:function(){return h}});var o=n(2676),i=n(109),s=n(9394),a=n(5904);n(1705);var r=n(9100),l=n(353);let h="./intro_p2",d=[{depth:2,value:"Non-Volatile Storage",id:"storage"},{depth:2,value:"File Systems",id:"fs"},{depth:3,value:"Why are they needed?",id:"fs-need"},{depth:3,value:"File System components",id:"file-system-components"},{depth:4,value:"File",id:"file"},{depth:4,value:"Folders / Directories / Drawers",id:"directory"},{depth:4,value:"Symbolic Links (symlinks) / Shortcuts",id:"symlinks"},{depth:4,value:"Inodes",id:"inodes"},{depth:2,value:"Conclusion",id:"conclusion"}];function c(e){let t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",em:"em",h3:"h3",pre:"pre",span:"span",h4:"h4",img:"img",ol:"ol",li:"li",strong:"strong",a:"a",hr:"hr"},(0,r.a)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{children:"Introduction Part I | mnemofs"}),"\n",(0,o.jsx)(t.p,{children:"So, designing and implementing a file system...a daunting task, and very overwhelming. BUUUT here's me delving into the concepts to the best of my knowledge. Grab a drink or a popcorn as it's gonna take a while."}),"\n",(0,o.jsx)(t.h2,{id:"storage",children:"Non-Volatile Storage"}),"\n",(0,o.jsx)(t.p,{children:"Non-volatile storages like hard disk drives (HDDs), Solid State Drives (SSDs), Compact Disks (CDs), Pen Drives, NAND Flash Devices, etc. are basically entire arrays that you can use to store anything."}),"\n",(0,o.jsxs)(t.p,{children:["What makes it different from arrays in your Random Access Memory (RAM)? Many things. But most important of them is that it is non-volatile. This means that if something is stored in it, it will stay on it even if power is no longer supplied to the device. As an additional bonus, as far as storage mediums that exist till date go, if you store even a byte at a location, say, ",(0,o.jsx)(t.code,{children:"x"}),", then it will be at ",(0,o.jsx)(t.code,{children:"x"})," unless deleted explicitly (or some unexpected event can modify your storage, but more about it later!)."]}),"\n",(0,o.jsxs)(t.p,{children:["Another difference is that, usually with an operating system (OS) running on your device, in RAM, you can not ",(0,o.jsx)(t.em,{children:"really"})," specify where you want a data to be stored in terms of absolute postition in the device. If you try to write, say a byte, at position ",(0,o.jsx)(t.code,{children:"x"}),", it needs to be within the allowed locations by the kernel of the OS. Without getting too much into it here as it is out of scope, if you do not write within the confines specified, you get hit with bad karma in the form of ",(0,o.jsx)(t.code,{children:"Segmentation fault (core dumped)"}),"."]}),"\n",(0,o.jsx)(l.UW,{type:"info",emoji:"ℹ️",children:(0,o.jsx)(t.p,{children:"There might be people trying to say you can not do that to a non-volatile device running on an OS as a user either blah blah, while others will counter it with their own written kernel module to do it but those are technicalities, and it will only result in confusion."})}),"\n",(0,o.jsx)(t.p,{children:"Thus, having established that they are different, we'll be calling volatile memory (primary memory) like RAM as memory, and non-volatile memory (or secondary memory) like HDDs, etc. as storage. Storage is slower than memory, but it is also cheaper per byte. Adding the advantage of non-volatile nature of storage shows you why it's such a popular medium of storing things."}),"\n",(0,o.jsxs)(t.p,{children:["In of itself, storage seems like a very good thing...but it is a fox in sheep's clothing. It can go horribly wrong if not used properly. In fact, the false sense of security of having your data ",(0,o.jsx)(t.em,{children:"persist"})," can make the shock even bigger if you can not access your data for whatever reason due to improper use."]}),"\n",(0,o.jsx)(t.h2,{id:"fs",children:"File Systems"}),"\n",(0,o.jsx)(t.h3,{id:"fs-need",children:"Why are they needed?"}),"\n",(0,o.jsx)(t.p,{children:"A thing to note is that a user would be better off printing out everything compared to managing the data on a storage device manually. Why? Here's an example to help you grasp that situation."}),"\n",(0,o.jsx)(t.p,{children:"Let's say there are 16 Bytes (16B) of storage on a device, and you want to store 4 pieces of information, each of 4B. If we split it into blocks of 1B each, we can give 4 consecutive blocks to each piece, and write it down somewhere, say on a paper, on which piece is where. Say, after sometime, 4th piece is no longer required, but your 2nd piece also suddenly needs 3B instead of the original 4. So you will clear the 4th piece's data from the device, and clear the last block given to your 2nd piece, so it only has 3B. Now the 8th, 13th, 14th, 15th, and 16th blocks are clear of data. Now, if another new piece (5th piece) wants 2B of storage, you give 8th and 13th place to it, and so on and on."}),"\n",(0,o.jsx)(l.UW,{type:"info",emoji:"⚠️",children:(0,o.jsx)(t.p,{children:"If you got confused while reading the example, that just proves my point."})}),"\n",(0,o.jsx)(t.p,{children:"This is very confusing to think and more importantly, difficult to remember. And here we are, barely talking about 16 B of information space and 4 pieces of information. Reality is harsher. We need to store SOOOOO many things. Your high definition (HD) photos, your movies, your applications, your games, and so on. A normal user just wants to store things without pain. The above mentioned method is very much an alternative definition of pain."}),"\n",(0,o.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,o.jsxs)(t.code,{"data-language":"text","data-theme":"default",children:[(0,o.jsx)(t.span,{className:"line",children:(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"Pain always exists."})}),"\n",(0,o.jsx)(t.span,{className:"line",children:(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"If you can't feel it,"})}),"\n",(0,o.jsx)(t.span,{className:"line",children:(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"it's probably being shouldered"})}),"\n",(0,o.jsx)(t.span,{className:"line",children:(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"by someone else."})}),"\n",(0,o.jsx)(t.span,{className:"line",children:(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,o.jsx)(t.span,{className:"line",children:(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"- Me, 2k24"})})]})}),"\n",(0,o.jsx)(t.p,{children:"So, some developers take that pain away from you onto their shoulders, and bring you file systems which are programs that manage your storage without you having to think about them too much."}),"\n",(0,o.jsx)(t.h3,{id:"file-system-components",children:"File System components"}),"\n",(0,o.jsx)(t.p,{children:"File systems have a lot of components. Like a car, some of them are very much visible to a user and they are aware of their presence, while the others are kept under-the-hood. These components are called file system objects (fs objects)."}),"\n",(0,o.jsx)(t.p,{children:"Also like the parts of a car, these fs objects have different names depending on whom you ask. We'll stick to Linux (/ Unix / POSIX) terminology here, but at the end it is just a name."}),"\n",(0,o.jsx)(t.p,{children:"We'll go through some of the very common ones below, while we keep others for later exploration as we delve deeper into flie systems."}),"\n",(0,o.jsx)(t.h4,{id:"file",children:"File"}),"\n",(0,o.jsx)(t.p,{children:"In a traditional sense, any collective piece of information that is part of one entity is one file. Like, a photo. One entire entity. It is a very loose definition. What if you cropped an image into 4 pieces and kept them separately? You do you, no judgement."}),"\n",(0,o.jsx)(t.p,{children:"Take it like a collection of information that you want to be kept together, such that programs can work on the entire thing together. An image viewer can show you an entire image in one go if you keep all of it together. A video player can play your entire movie in one go if kept in one piece. And so on."}),"\n",(0,o.jsxs)(t.p,{children:["They are analogous to a single paper, or multiple papers that are kept together in thing called a file (usually seen in the ",(0,o.jsx)(t.em,{children:"old"})," photos of offices from a time close to the ice age) as they belong to the same topic."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://res.cloudinary.com/dbzi2yvvc/image/upload/w_250/v1716193039/71OPhvMBuRL_ywhdnw.jpg",alt:"file"})}),"\n",(0,o.jsx)(t.h4,{id:"directory",children:"Folders / Directories / Drawers"}),"\n",(0,o.jsx)(t.p,{children:"Again, work terminology. They are called many different things. We'll stick to directories, as Linux calls it. They are just a group of files and/or other directories as well. Why are they even needed? Multiple reasons. Right answer is that it depends on the user. But, here are some of the common reasons:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Organization"}),". We like to be viewed as organized intellectual beings. So we organized multiple files in a hierarchical system so that topics become more specific the further down in the hierarchy you go."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Searching"}),". Suppose you have 500 files in your view. If you want to look for a specific file, you need to go through, in the worst case, all of them. If organized, the search may be way faster as you would know which directory, and the same inside it, and so on."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"etc."}),"\n",(0,o.jsx)(t.h4,{id:"symlinks",children:"Symbolic Links (symlinks) / Shortcuts"}),"\n",(0,o.jsx)(t.p,{children:"Suppose you have a file in a directory that is very deep in a hierarchical system of directories. But suppose there's this folder called \"My Desktop\" in which, if files are kept, will be shown on...your Desktop (\uD83E\uDD2F). Now, keeping everything on your Desktop would not make sense, and that file is happy where it is. And you're mostly happy with where it is as well. But you need it on your Desktop as well."}),"\n",(0,o.jsxs)(t.p,{children:["Well, copy it, duh! ",(0,o.jsx)(t.strong,{children:"But"})," updating one does not update the other. Thus, came symlinks. They are a type of file which points to the location of another file. There are two types of symlinks, but technicalities."]}),"\n",(0,o.jsxs)(t.p,{children:["Symlinks ",(0,o.jsx)(t.em,{children:"might"})," not have universal support as they might not be considered essential for the target audience of the OS, but most major general purpose OSes do support them."]}),"\n",(0,o.jsx)(t.h4,{id:"inodes",children:"Inodes"}),"\n",(0,o.jsx)(t.p,{children:"Files usually have two types of data associated with them. Their content, and their metadata. Their content is what we usually refer to as files. Their metadata usually refers to the information about the file. If you go back to the work terminology, it might be analogous to the information written on the cover of the physical file."}),"\n",(0,o.jsx)(t.p,{children:"These contain information like the file's name, their owner (who created it, or who owns it, etc. in a multi-user environment), their creation date, their last modification date, their last access date, their size, and so on. These are stored as another fs object called an inode."}),"\n",(0,o.jsx)(t.p,{children:"Inodes are very much optional too, and it depends on the file system on how they want to manage the metadata."}),"\n",(0,o.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsxs)(t.p,{children:["So, we glanced over the basic knowledge required to start learning about file systems. The fun and games end here, and in ",(0,o.jsx)(t.a,{href:"%7Bnext%7D",children:"Part II"}),", it's time to dive into the depths of file systems, and file system development."]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(l.oy,{children:[(0,o.jsx)(l.Zb,{icon:"",title:"",href:""}),(0,o.jsx)(l.Zb,{icon:"❱ ",title:"Part II",href:h})]})]})}let p={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.a)(),e.components);return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/mnemofs/intro_p1.mdx",route:"/mnemofs/intro_p1",timestamp:1716301387e3,pageMap:[{kind:"MdxPage",name:"coming_soon",route:"/coming_soon"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"mnemofs",route:"/mnemofs",children:[{kind:"MdxPage",name:"intro_p1",route:"/mnemofs/intro_p1"},{kind:"MdxPage",name:"intro_p2",route:"/mnemofs/intro_p2"},{kind:"MdxPage",name:"intro_p3",route:"/mnemofs/intro_p3"},{kind:"Meta",data:{intro_p1:"Intro P1",intro_p2:"Intro P2",intro_p3:"Intro P3"}}]},{kind:"Meta",data:{coming_soon:"Coming Soon",index:"Index"}}],flexsearch:{codeblocks:!0},title:"Introduction Part I | mnemofs",headings:d},pageNextRoute:"/mnemofs/intro_p1",nextraLayout:s.ZP,themeConfig:a.Z};t.default=(0,i.j)(p)},5904:function(e,t,n){"use strict";var o=n(2676),i=n(4384),s=n.n(i);t.Z={footer:(0,o.jsx)("p",{children:"MIT 2024 \xa9 resyfer."}),head:e=>{let{title:t,meta:n}=e;return(0,o.jsxs)(o.Fragment,{children:[n.description&&(0,o.jsx)("meta",{name:"description",content:n.description}),n.tag&&(0,o.jsx)("meta",{name:"keywords",content:n.tag}),n.author&&(0,o.jsx)("meta",{name:"author",content:n.author}),(0,o.jsx)(s(),{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-HFNGDFK1PN"}),(0,o.jsx)(s(),{children:"\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n\n        gtag('config', 'G-HFNGDFK1PN');\n        "})]})},postFooter:!1}}},function(e){e.O(0,[672,888,774,179],function(){return e(e.s=8142)}),_N_E=e.O()}]);