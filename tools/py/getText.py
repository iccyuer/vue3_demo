import ctypes
import win32api
import win32gui
import win32con
import pywintypes

# 获取指定控件的内容
#   hwnd: 窗口句柄
#   max_len: 缓冲区的最大长度，如果不够长，会自动扩张
#   返回: 内容，失败返回None
def get_item_text(hwnd,max_len=4):
    while True:
        # 创建char[]
        buf=ctypes.create_string_buffer(max_len)
        # 获取内容
        if win32gui.SendMessage(hwnd,win32con.WM_GETTEXT,max_len//2,buf)==0:
            return None
        # 如果以0,0,0,0结尾，说明缓冲区够大
        if (buf.raw[-4],buf.raw[-3],buf.raw[-2],buf.raw[-1])==(0,0,0,0):
            # 转成utf-8
            text=pywintypes.UnicodeFromRaw(buf.raw)
            # 去掉末尾的0就能返回
            return text.strip('\00')
        # 否则把缓冲区扩大一倍重试
        else:
            max_len*=2

print(get_item_text(0x050B3A))