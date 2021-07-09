import win32con
from win32 import win32gui
from win32 import win32clipboard as w
from win32 import win32api
import pyautogui
import sys


handle = win32gui.FindWindow("Notepad", None) 
handle2 = win32gui.FindWindow(None, "记事本")

print(handle)
print(handle2)

# win32gui.ShowWindow(handle2, win32con.SW_SHOWMAXIMIZED)  #SW_SHOWMAXIMIZED 最大
# win32gui.ShowWindow(handle2, win32con.SW_SHOWMINIMIZED)  #SW_SHOWMINIMIZED 最小

# win32gui.SetFocus(handle)

# win32gui.SetForegroundWindow(handle2)
# win32gui.BringWindowToTop(handle2)
# win32gui.SetWindowPos(handle2, win32con.HWND_TOPMOST, 0,0,0,0, win32con.SWP_NOSIZE | win32con.SWP_NOMOVE)

# win32api.SetCursorPos([90, 110])
# win32api.mouse_event(win32con.MOUSEEVENTF_LEFTDOWN, 0, 0, 0, 0)
# win32api.mouse_event(win32con.MOUSEEVENTF_LEFTUP, 0, 0, 0, 0)

buffer = '0' *50
len = win32gui.SendMessage(0x050B3A, win32con.WM_GETTEXTLENGTH)+1 #获取edit控件文本长度

win32gui.SendMessage(0x050B3A, win32con.WM_GETTEXT, len, buffer) #读取文本

print(buffer[:len-1])

# rect = win32gui.GetWindowRect(handle2)

# print(rect)

# subls = win32gui.FindWindowEx(handle2, None, None, None) 

# print(subls)

# rect2 = win32gui.GetWindowRect(subls)
# print(rect2)

