from tkinter.constants import NO
import win32con
from win32 import win32gui

hwnd = win32gui.FindWindow(None, u"有道云笔记")
print(hwnd)

if hwnd != 0:
    # 若最小化，则将其显示，反之则最小化
    if win32gui.IsIconic(hwnd):
        win32gui.ShowWindow(hwnd, win32con.SW_SHOWMAXIMIZED)
    else:
        win32gui.ShowWindow(hwnd, win32con.SW_SHOWMINIMIZED)

    win32gui.SetForegroundWindow(hwnd)  # 设置前置窗口
    # win32gui.SetFocus(hwnd)  # 设置聚焦窗口

    # 关闭窗口
    # win32gui.PostMessage(hwnd, win32con.WM_CLOSE, 0, 0)