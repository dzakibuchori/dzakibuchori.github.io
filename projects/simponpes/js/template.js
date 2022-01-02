/* ../assets/js/scripts.js */
"use strict";window.Chart&&(Chart.defaults.global.defaultFontFamily="'Nunito', 'Segoe UI', 'Arial'",Chart.defaults.global.defaultFontSize=12,Chart.defaults.global.defaultFontStyle=500,Chart.defaults.global.defaultFontColor="#999",Chart.defaults.global.tooltips.backgroundColor="#000",Chart.defaults.global.tooltips.bodyFontColor="rgba(255,255,255,.7)",Chart.defaults.global.tooltips.titleMarginBottom=10,Chart.defaults.global.tooltips.titleFontSize=14,Chart.defaults.global.tooltips.titleFontFamily="'Nunito', 'Segoe UI', 'Arial'",Chart.defaults.global.tooltips.titleFontColor="#fff",Chart.defaults.global.tooltips.xPadding=15,Chart.defaults.global.tooltips.yPadding=15,Chart.defaults.global.tooltips.displayColors=!1,Chart.defaults.global.tooltips.intersect=!1,Chart.defaults.global.tooltips.mode="nearest"),window.Dropzone&&(Dropzone.autoDiscover=!1),$("[data-confirm]").each(function(){var me=$(this),me_data=me.data("confirm");me_data=me_data.split("|"),me.fireModal({title:me_data[0],body:me_data[1],buttons:[{text:me.data("confirm-text-yes")||"Yes",class:"btn btn-danger btn-shadow",handler:function(){eval(me.data("confirm-yes"))}},{text:me.data("confirm-text-cancel")||"Cancel",class:"btn btn-secondary",handler:function(modal){$.destroyModal(modal),eval(me.data("confirm-no"))}}]})}),$(function(){let sidebar_nicescroll_opts={cursoropacitymin:0,cursoropacitymax:.8,zindex:892},now_layout_class=null;var sidebar_sticky=function(){$("body").hasClass("layout-2")&&($("body.layout-2 #sidebar-wrapper").stick_in_parent({parent:$("body")}),$("body.layout-2 #sidebar-wrapper").stick_in_parent({recalc_every:1}))},sidebar_nicescroll;sidebar_sticky();var update_sidebar_nicescroll=function(){let a=setInterval(function(){null!=sidebar_nicescroll&&sidebar_nicescroll.resize()},10);setTimeout(function(){clearInterval(a)},600)},sidebar_dropdown=function(){$(".main-sidebar").length&&($(".main-sidebar").niceScroll(sidebar_nicescroll_opts),sidebar_nicescroll=$(".main-sidebar").getNiceScroll(),$(".main-sidebar .sidebar-menu li a.has-dropdown").off("click").on("click",function(){var a=$(this),e=!1;return a.parent().hasClass("active")&&(e=!0),$(".main-sidebar .sidebar-menu li.active > .dropdown-menu").slideUp(500,function(){return update_sidebar_nicescroll(),!1}),$(".main-sidebar .sidebar-menu li.active").removeClass("active"),1==e?(a.parent().removeClass("active"),a.parent().find("> .dropdown-menu").slideUp(500,function(){return update_sidebar_nicescroll(),!1})):(a.parent().addClass("active"),a.parent().find("> .dropdown-menu").slideDown(500,function(){return update_sidebar_nicescroll(),!1})),!1}),$(".main-sidebar .sidebar-menu li.active > .dropdown-menu").slideDown(500,function(){return update_sidebar_nicescroll(),!1}))};sidebar_dropdown(),$("#top-5-scroll").length&&$("#top-5-scroll").css({height:315}).niceScroll(),$(".main-content").css({minHeight:$(window).outerHeight()-108}),$(".nav-collapse-toggle").click(function(){return $(this).parent().find(".navbar-nav").toggleClass("show"),!1}),$(document).on("click",function(a){$(".nav-collapse .navbar-nav").removeClass("show")});var toggle_sidebar_mini=function(a){let e=$("body");a?(e.addClass("sidebar-mini"),e.removeClass("sidebar-show"),sidebar_nicescroll.remove(),sidebar_nicescroll=null,$(".main-sidebar .sidebar-menu > li").each(function(){let a=$(this);a.find("> .dropdown-menu").length?(a.find("> .dropdown-menu").hide(),a.find("> .dropdown-menu").prepend('<li class="dropdown-title pt-3">'+a.find("> a").text()+"</li>")):(a.find("> a").attr("data-toggle","tooltip"),a.find("> a").attr("data-original-title",a.find("> a").text()),$("[data-toggle='tooltip']").tooltip({placement:"right"}))})):(e.removeClass("sidebar-mini"),$(".main-sidebar").css({overflow:"hidden"}),setTimeout(function(){$(".main-sidebar").niceScroll(sidebar_nicescroll_opts),sidebar_nicescroll=$(".main-sidebar").getNiceScroll()},500),$(".main-sidebar .sidebar-menu > li > ul .dropdown-title").remove(),$(".main-sidebar .sidebar-menu > li > a").removeAttr("data-toggle"),$(".main-sidebar .sidebar-menu > li > a").removeAttr("data-original-title"),$(".main-sidebar .sidebar-menu > li > a").removeAttr("title"))};$("[data-toggle='sidebar']").click(function(){var a=$("body"),e=$(window);return e.outerWidth()<=1024?(a.removeClass("search-show search-gone"),a.hasClass("sidebar-gone")?(a.removeClass("sidebar-gone"),a.addClass("sidebar-show")):(a.addClass("sidebar-gone"),a.removeClass("sidebar-show")),update_sidebar_nicescroll()):(a.removeClass("search-show search-gone"),a.hasClass("sidebar-mini")?toggle_sidebar_mini(!1):toggle_sidebar_mini(!0)),!1});var toggleLayout=function(){var a=$(window),e=$("body").attr("class")||"",t=e.trim().length>0?e.split(" "):"";if(t.length>0&&t.forEach(function(a){-1!=a.indexOf("layout-")&&(now_layout_class=a)}),a.outerWidth()<=1024){if($("body").hasClass("sidebar-mini")&&(toggle_sidebar_mini(!1),$(".main-sidebar").niceScroll(sidebar_nicescroll_opts),sidebar_nicescroll=$(".main-sidebar").getNiceScroll()),$("body").addClass("sidebar-gone"),$("body").removeClass("layout-2 layout-3 sidebar-mini sidebar-show"),$("body").off("click touchend").on("click touchend",function(a){($(a.target).hasClass("sidebar-show")||$(a.target).hasClass("search-show"))&&($("body").removeClass("sidebar-show"),$("body").addClass("sidebar-gone"),$("body").removeClass("search-show"),update_sidebar_nicescroll())}),update_sidebar_nicescroll(),"layout-3"==now_layout_class){let a=$(".navbar-secondary").attr("class"),e=$(".navbar-secondary");e.attr("data-nav-classes",a),e.removeAttr("class"),e.addClass("main-sidebar");let t=$(".main-sidebar");t.find(".container").addClass("sidebar-wrapper").removeClass("container"),t.find(".navbar-nav").addClass("sidebar-menu").removeClass("navbar-nav"),t.find(".sidebar-menu .nav-item.dropdown.show a").click(),t.find(".sidebar-brand").remove(),t.find(".sidebar-menu").before($("<div>",{class:"sidebar-brand"}).append($("<a>",{href:$(".navbar-brand").attr("href")}).html($(".navbar-brand").html()))),setTimeout(function(){sidebar_nicescroll=t.niceScroll(sidebar_nicescroll_opts),sidebar_nicescroll=t.getNiceScroll()},700),sidebar_dropdown(),$(".main-wrapper").removeClass("container")}}else{$("body").removeClass("sidebar-gone sidebar-show"),now_layout_class&&$("body").addClass(now_layout_class);let a=$(".main-sidebar").attr("data-nav-classes"),e=$(".main-sidebar");if("layout-3"==now_layout_class&&e.hasClass("main-sidebar")){e.find(".sidebar-menu li a.has-dropdown").off("click"),e.find(".sidebar-brand").remove(),e.removeAttr("class"),e.addClass(a);let t=$(".navbar-secondary");t.find(".sidebar-wrapper").addClass("container").removeClass("sidebar-wrapper"),t.find(".sidebar-menu").addClass("navbar-nav").removeClass("sidebar-menu"),t.find(".dropdown-menu").hide(),t.removeAttr("style"),t.removeAttr("tabindex"),t.removeAttr("data-nav-classes"),$(".main-wrapper").addClass("container")}else"layout-2"==now_layout_class?$("body").addClass("layout-2"):update_sidebar_nicescroll()}};toggleLayout(),$(window).resize(toggleLayout),$("[data-toggle='search']").click(function(){var a=$("body");a.hasClass("search-gone")?(a.addClass("search-gone"),a.removeClass("search-show")):(a.removeClass("search-gone"),a.addClass("search-show"))}),$("[data-toggle='tooltip']").tooltip(),$('[data-toggle="popover"]').popover({container:"body"}),jQuery().select2&&$(".select2").select2(),jQuery().selectric&&$(".selectric").selectric({disableOnMobile:!1,nativeOnMobile:!1}),$(".notification-toggle").dropdown(),$(".notification-toggle").parent().on("shown.bs.dropdown",function(){$(".dropdown-list-icons").niceScroll({cursoropacitymin:.3,cursoropacitymax:.8,cursorwidth:7})}),$(".message-toggle").dropdown(),$(".message-toggle").parent().on("shown.bs.dropdown",function(){$(".dropdown-list-message").niceScroll({cursoropacitymin:.3,cursoropacitymax:.8,cursorwidth:7})}),$(".chat-content").length&&($(".chat-content").niceScroll({cursoropacitymin:.3,cursoropacitymax:.8}),$(".chat-content").getNiceScroll(0).doScrollTop($(".chat-content").height())),jQuery().summernote&&($(".summernote").summernote({dialogsInBody:!0,minHeight:250}),$(".summernote-simple").summernote({dialogsInBody:!0,minHeight:150,toolbar:[["style",["bold","italic","underline","clear"]],["font",["strikethrough"]],["para",["paragraph"]]]})),window.CodeMirror&&$(".codeeditor").each(function(){let a=CodeMirror.fromTextArea(this,{lineNumbers:!0,theme:"duotone-dark",mode:"javascript",height:200});a.setSize("100%",200)}),$(".follow-btn, .following-btn").each(function(){var me=$(this),follow_text="Follow",unfollow_text="Following";me.click(function(){return me.hasClass("following-btn")?(me.removeClass("btn-danger"),me.removeClass("following-btn"),me.addClass("btn-primary"),me.html(follow_text),eval(me.data("unfollow-action"))):(me.removeClass("btn-primary"),me.addClass("btn-danger"),me.addClass("following-btn"),me.html(unfollow_text),eval(me.data("follow-action"))),!1})}),$("[data-dismiss]").each(function(){var a=$(this),e=a.data("dismiss");a.click(function(){return $(e).fadeOut(function(){$(e).remove()}),!1})}),$("[data-collapse]").each(function(){var a=$(this),e=a.data("collapse");a.click(function(){return $(e).collapse("toggle"),$(e).on("shown.bs.collapse",function(e){e.stopPropagation(),a.html('<i class="fas fa-minus"></i>')}),$(e).on("hidden.bs.collapse",function(e){e.stopPropagation(),a.html('<i class="fas fa-plus"></i>')}),!1})}),$(".gallery .gallery-item").each(function(){var a=$(this);a.attr("href",a.data("image")),a.attr("title",a.data("title")),a.parent().hasClass("gallery-fw")&&(a.css({height:a.parent().data("item-height")}),a.find("div").css({lineHeight:a.parent().data("item-height")+"px"})),a.css({backgroundImage:'url("'+a.data("image")+'")'})}),jQuery().Chocolat&&$(".gallery").Chocolat({className:"gallery",imageSelector:".gallery-item"}),$("[data-background]").each(function(){var a=$(this);a.css({backgroundImage:"url("+a.data("background")+")"})}),$("[data-tab]").each(function(){var a=$(this);a.click(function(){if(!a.hasClass("active")){$('[data-tab-group="'+a.data("tab")+'"]');var e=$('[data-tab-group="'+a.data("tab")+'"].active'),t=$(a.attr("href")),o=$('[data-tab="'+a.data("tab")+'"]');o.removeClass("active"),a.addClass("active"),t.addClass("active"),e.removeClass("active")}return!1})}),$(".needs-validation").submit(function(){var a=$(this);!1===a[0].checkValidity()&&(event.preventDefault(),event.stopPropagation()),a.addClass("was-validated")}),$(".alert-dismissible").each(function(){var a=$(this);a.find(".close").click(function(){a.alert("close")})}),$(".main-navbar").length,$("[data-crop-image]").each(function(a){$(this).css({overflow:"hidden",position:"relative",height:$(this).data("crop-image")})}),$("[data-toggle-slide]").click(function(){let a=$(this).data("toggle-slide");return $(a).slideToggle(),!1}),$("[data-dismiss=modal]").click(function(){return $(this).closest(".modal").modal("hide"),!1}),$("[data-width]").each(function(){$(this).css({width:$(this).data("width")})}),$("[data-height]").each(function(){$(this).css({height:$(this).data("height")})}),$(".chocolat-parent").length&&jQuery().Chocolat&&$(".chocolat-parent").Chocolat(),$(".sortable-card").length&&jQuery().sortable&&$(".sortable-card").sortable({handle:".card-header",opacity:.8,tolerance:"pointer"}),jQuery().daterangepicker&&($(".datepicker").length&&$(".datepicker").daterangepicker({locale:{format:"YYYY-MM-DD"},singleDatePicker:!0}),$(".datetimepicker").length&&$(".datetimepicker").daterangepicker({locale:{format:"YYYY-MM-DD HH:mm"},singleDatePicker:!0,timePicker:!0,timePicker24Hour:!0}),$(".daterange").length&&$(".daterange").daterangepicker({locale:{format:"YYYY-MM-DD"},drops:"down",opens:"right"})),jQuery().timepicker&&$(".timepicker").length&&$(".timepicker").timepicker({icons:{up:"fas fa-chevron-up",down:"fas fa-chevron-down"}})});