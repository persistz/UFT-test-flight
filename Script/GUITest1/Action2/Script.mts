'New Order(buy tickets)
'Copyright by George
'ScriptDate:2015/10/14
'Function:相对路径、自定义检查点

Window("Flight Reservation").ActiveX("MaskEdBox").Type "103015" @@ hightlight id_;_66644_;_script infofile_;_ZIP::ssf1.xml_;_
Window("Flight Reservation").WinComboBox("Fly From:").Select "London" @@ hightlight id_;_132092_;_script infofile_;_ZIP::ssf2.xml_;_
Window("Flight Reservation").WinComboBox("Fly To:").Select "Denver" @@ hightlight id_;_132088_;_script infofile_;_ZIP::ssf3.xml_;_
Window("Flight Reservation").WinButton("FLIGHT").Click @@ hightlight id_;_132084_;_script infofile_;_ZIP::ssf4.xml_;_
Window("Flight Reservation").Dialog("Flights Table").WinButton("OK").Click @@ hightlight id_;_132232_;_script infofile_;_ZIP::ssf5.xml_;_
Window("Flight Reservation").WinEdit("Name:").Type "G" @@ hightlight id_;_132082_;_script infofile_;_ZIP::ssf6.xml_;_
Window("Flight Reservation").WinEdit("Name:").Set "George" @@ hightlight id_;_132082_;_script infofile_;_ZIP::ssf7.xml_;_
Window("Flight Reservation").WinRadioButton("First").Set @@ hightlight id_;_132080_;_script infofile_;_ZIP::ssf8.xml_;_
Window("Flight Reservation").WinButton("Insert Order").Click @@ hightlight id_;_197648_;_script infofile_;_ZIP::ssf9.xml_;_

Dim num,price,total,result,str
num = Window("Flight Reservation").WinEdit("Tickets:").GetROProperty("text")
'text选取相应字段
price = Split(Window("Flight Reservation").WinEdit("Price:").GetROProperty("text"),"$")
'Split为字符串截取函数，结果保留在数组中
total = split(Window("Flight Reservation").WinEdit("Total:").GetROProperty("text"),"$")
result = num*price(1)
'str = "数量：" num & vbcrlf & "价格：" total(1) & vbcrlf & result
msgbox (num & vbcrlf & total(1) & vbcrlf & result)
'If total(1)=result Then    
'此处不等直接使用等号，使用等号时比较的大小为336.6和336.60，结果为Faise
If abs(total(1)-result)<0.001 Then
'2015.10.15 修改：比较大小后使用绝对值
	msgbox ("结果相等，即将执行Reporter语句段")
	Reporter.ReportEvent 0, "Compare Value", "Success." 
'*****************************
'Reporter中的ReportEvent方法介绍
'描述：在test result中报告测试结果。
'语法：Reporter.ReportEventEventStatus, ReportStepName, Details [, in]
'实例：报告一个错误结果
'Reporter.ReportEvent 1, "Custom Step", "The user-defined step failed."
'或
'Reporter.ReportEvent micFail, "Custom Step", "The user-defined step failed."
'*****************************
else
	msgbox ("结果不等，即将执行Reporter语句段")
	Reporter.ReportEvent 1, "Compare Value", "Failed." 	
End If