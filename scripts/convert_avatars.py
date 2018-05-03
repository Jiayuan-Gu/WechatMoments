"""
Convert wechat-style avatar into our format
"""
from __future__ import print_function, absolute_import, division
import os
import glob2
import shutil

# set your own directory
avatar_src_dir = "/Users/jiayuang/Projects/data/avatar"
avatar_tgt_dir = "img/avatar"

avatar_img_paths = glob2.glob(os.path.join(avatar_src_dir, '**', '*.png'))
# print(avatar_img_paths)
for img_ind, img_path in enumerate(avatar_img_paths):
    root, ext = os.path.splitext(img_path)
    shutil.copyfile(img_path, os.path.join(avatar_tgt_dir, "%04d" % img_ind) + ext)
