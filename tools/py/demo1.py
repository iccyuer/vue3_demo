import win32con
from win32 import win32gui
from win32 import win32clipboard as w
import pyautogui
import sys


def show_window_attr(hwnd):
    """
    显示窗口的属性
    :param hwnd: 窗口句柄（十进制）
    :return: 所有的属性
    WindowName: 窗口标题
    ClassName: 窗口类名
    HwndPy: 窗口句柄（十进制）
    HwndSpy: 窗口句柄（十六进制）
    """
    if not hwnd:
        return
    WindowName = win32gui.GetWindowText(hwnd)
    ClassName = win32gui.GetClassName(hwnd)
    HwndPy = hwnd
    HwndSpy = hex(hwnd)
    return (WindowName, ClassName, HwndPy, HwndSpy)

# print(show_window_attr(int(0x602AC)))


def show_top_windows():
    """
    列出所有的顶级窗口及属性
    :return: 全部的顶层窗口及对应属性
    """
    hwndList = []
    win32gui.EnumWindows(lambda hwnd, param: param.append(show_window_attr(hwnd)), hwndList)
    return hwndList

# print(show_top_windows())

def FindFuzzyTopWindow(FuzzyWindowName=None):
    """
    根据标题模糊查找全部符合条件的主窗体
    :param FuzzyWindowName: 窗口标题部分文字
    :return:
    """
    all_windows = show_top_windows()
    result = []
    for window in all_windows:
        if FuzzyWindowName in window[0]:
            result.append(window)
    return result

# print(FindFuzzyTopWindow('有道云笔记'))

def FindSubHandles(pHandle=None, ClassName=None, WinName=None, index=None):
    """
    返回窗体下全部的子窗体，默认主窗体下的窗体
    :param pHandle: 窗口句柄（十进制）
    :param ClassName: 窗口类名，返回特定类名
    :param WinName: 窗口标题，返回特定标题
    :param index: 位置，返回特定位置的窗口
    :return: 包含属性的全部子窗口
    """
    num = 0
    handle = 0
    SubHandlesList = []
    while True:
        # find next handle, return HwndPy
        handle = win32gui.FindWindowEx(pHandle, handle, ClassName, WinName) 
        if handle == 0:
        # no more handle
            break
        # get handle attribution
        attr = show_window_attr(handle)
        # append to list
        SubHandlesList.append(tuple(list(attr) + [num]))
        num += 1
    if index is not None:
        return SubHandlesList[index]
    else:
        return SubHandlesList


handle2 = win32gui.FindWindow(None, "有道云笔记")
subls = FindSubHandles(handle2)

print(subls)

# win32gui.SetFocus(0x701f0)