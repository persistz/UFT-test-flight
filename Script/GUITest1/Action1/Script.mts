'Login
'Copyright by George
'ScriptDate:2015/10/14
'Funtion:实现登录功能、在线订单、退出程序；在订票部分，运用if语句段进行判断，实现检测票价是否正确的功能。

SystemUtil.Run"C:\Program Files (x86)\HP\Unified Functional Testing\samples\flight\app\flight4a.exe" @@ hightlight id_;_524966_;_script infofile_;_ZIP::ssf4.xml_;_
'Open system.
Dialog("Login").WinEdit("Agent Name:").Set "test" @@ hightlight id_;_262882_;_script infofile_;_ZIP::ssf1.xml_;_
'代码执行到这一步有时会打开两个窗体，原因为打开方式设置不同，点击cancel按钮可继续执行
Dialog("Login").WinEdit("Agent Name:").Type  micTab @@ hightlight id_;_262882_;_script infofile_;_ZIP::ssf2.xml_;_
Dialog("Login").WinEdit("Password:").SetSecure "561c9dc1827040d00d28daaf4d102a9f0f8730f1" @@ hightlight id_;_262878_;_script infofile_;_ZIP::ssf3.xml_;_
Dialog("Login").WinButton("OK").Click