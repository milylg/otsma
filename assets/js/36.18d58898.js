(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{475:function(a,t,_){"use strict";_.r(t);var r=_(15),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,_=a._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h4",{attrs:{id:"应用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[a._v("#")]),a._v(" 应用场景")]),a._v(" "),_("p",[a._v("嵌套事务操作，特点：以方法为界限")]),a._v(" "),_("h4",{attrs:{id:"具体类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#具体类型"}},[a._v("#")]),a._v(" 具体类型")]),a._v(" "),_("h5",{attrs:{id:"propagation-required-常用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#propagation-required-常用"}},[a._v("#")]),a._v(" PROPAGATION_REQUIRED （常用）")]),a._v(" "),_("p",[a._v("默认传播行为：REQUIRED")]),a._v(" "),_("p",[a._v("支持当前事务。如果当前没有事务，就新建一个事务")]),a._v(" "),_("p",[a._v("通俗的说，在service层的方法中")]),a._v(" "),_("p",[a._v("如果没有标记@Translation注解，但是在这个方法中存在进行事务操作的方法调用。在这种情况下，如果该事务方法在执行中抛出了异常，那么该事务方法仅仅回滚这个方法内部的数据操作，而在该方法之前的操作的数据不会进行回滚。")]),a._v(" "),_("p",[a._v("如果业务方法标记了@Translation注解，可以理解为当前方法中所有对数据库进行操作都具有事务的特性，在处理数据的过程中发生了异常，所有的数据都会回滚至这个业务方法调用前的数据状态。假使在这个标记了事务注解的方法中存在一个也标记了事务的方法，那么子方法的事务仍然使用业务方法中的事务。")]),a._v(" "),_("h5",{attrs:{id:"propagation-requires-new-常用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#propagation-requires-new-常用"}},[a._v("#")]),a._v(" PROPAGATION_REQUIRES_NEW（常用）")]),a._v(" "),_("p",[a._v("传播行为：REQUIRE_NEW")]),a._v(" "),_("p",[a._v("新建事务")]),a._v(" "),_("p",[a._v("在service的接口方法中，如果该方法中使用了该注解参数，那么该方法的事务操作将不受其他事务环境的影响。例如，事务方法A(默认事务传播级别）中嵌套了使用REQUIRE_NEW的事务注解修饰的事务方法B，此时，如果B中出现了异常，仅仅B执行了事务回滚，方法A中除了B部分以外的数据不会进行回滚。")]),a._v(" "),_("h5",{attrs:{id:"propagation-supports"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#propagation-supports"}},[a._v("#")]),a._v(" PROPAGATION_SUPPORTS")]),a._v(" "),_("p",[a._v("传播行为：SUPPORTS")]),a._v(" "),_("p",[a._v("如果在父事务中，就以当前事务的形式执行；如果不在一个事务中，那么就以非事务的形式执行")]),a._v(" "),_("p",[a._v("但是出现异常，父事务并没有回滚，事实证明它不会波及到父事务的执行结果，只会影响当前事务的结果，当前事务会出现回滚的操作。")]),a._v(" "),_("h5",{attrs:{id:"propagation-mandatory"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#propagation-mandatory"}},[a._v("#")]),a._v(" PROPAGATION_MANDATORY")]),a._v(" "),_("p",[a._v("传播行为：MANDATORY")]),a._v(" "),_("p",[a._v("必须在一个父事务中去执行；否则就会抛出异常。")]),a._v(" "),_("h5",{attrs:{id:"propagation-not-supported"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#propagation-not-supported"}},[a._v("#")]),a._v(" PROPAGATION_NOT_SUPPORTED")]),a._v(" "),_("p",[a._v("传播行为：NOT_SUPPORTED")]),a._v(" "),_("p",[a._v("不支持当前事务")]),a._v(" "),_("p",[a._v("通俗地说，事务A（默认传播行为）嵌套执行NOT_SUPPORTED修饰的方法B，执行方法A时，当执行到B，B会以一个非事务的方法运行，A事务中如果出现了数据回滚，方法B中的数据并不会回滚到执行前的数据状态。")]),a._v(" "),_("h5",{attrs:{id:"propagation-never"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#propagation-never"}},[a._v("#")]),a._v(" PROPAGATION_NEVER")]),a._v(" "),_("p",[a._v("传播行为：NEVER")]),a._v(" "),_("p",[a._v("不能在事务中运行，会抛出异常")]),a._v(" "),_("h5",{attrs:{id:"propagation-nested"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#propagation-nested"}},[a._v("#")]),a._v(" PROPAGATION_NESTED")]),a._v(" "),_("p",[a._v("传播行为：NESTED")]),a._v(" "),_("p",[a._v("嵌套在父事务中，依赖于父事务，父事务的提交与回滚和子事务是一起的。")]),a._v(" "),_("p",[a._v("相当于savepoint")]),a._v(" "),_("p",[a._v("换一个角度看待，它有这样的特性：外层事务失败时，会回滚内层事务所做的动作；而内层事务操作失败并不会引起外层事务的回滚。")]),a._v(" "),_("h4",{attrs:{id:"隔离级别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#隔离级别"}},[a._v("#")]),a._v(" 隔离级别")]),a._v(" "),_("ul",[_("li",[_("p",[a._v("@Transactional(isolation = Isolation.READ_UNCOMMITTED) 读取未提交数据(会出现脏读, 不可重复读) 基本不使用")])]),a._v(" "),_("li",[_("p",[a._v("@Transactional(isolation = Isolation.READ_COMMITTED) 读取已提交数据(会出现不可重复读和幻读)")])]),a._v(" "),_("li",[_("p",[a._v("@Transactional(isolation = Isolation.REPEATABLE_READ) 可重复读(会出现幻读)")])]),a._v(" "),_("li",[_("p",[a._v("@Transactional(isolation = Isolation.SERIALIZABLE) 串行化")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);