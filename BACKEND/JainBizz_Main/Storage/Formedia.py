import datetime
import os




def filepathImg(request, filename):
    old_filename = filename
    timeNow = datetime.datetime.now().strftime('%Y%m%d%H:%M:%S')
    filename = '%s%s'%(timeNow, old_filename)
    return os.path.join(filepathImg,filename)

def filepathVedio(request, filename):
    old_filename = filename
    timeNow = datetime.datetime.now().strftime('%Y%m%d%H:%M:%S')
    filename = '%s%s'%(timeNow, old_filename)
    return os.path.join('vedio/',filename)

def filepathcat(request, filename):
    old_filename = filename
    timeNow = datetime.datetime.now().strftime('%Y%m%d%H:%M:%S')
    filename = '%s%s'%(timeNow, old_filename)
    return os.path.join('categoryIMG/',filename)

def file_Offering(request, filename):
    old_filename = filename
    timeNow = datetime.datetime.now().strftime('%Y%m%d%H:%M:%S')
    filename = '%s%s'%(timeNow, old_filename)
    return os.path.join('categoryIMG/',filename)


def File_Document(request, filename):
    old_filename = filename
    timeNow = datetime.datetime.now().strftime('%Y%m%d%H:%M:%S')
    filename = '%s%s'%(timeNow, old_filename)
    return os.path.join('Documents/',filename)