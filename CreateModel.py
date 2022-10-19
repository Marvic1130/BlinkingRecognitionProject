from keras.models import Sequential
from keras.layers import Dropout, Activation, Dense
from keras.layers import Flatten, Convolution2D, MaxPooling2D, Conv2D
from keras.models import load_model
import os, re, glob
import cv2
import numpy as np

groups_folder_path = 'CreateTrainingData'
categories = ['on','off']

num_classes = categories.__len__()

ls_x = []
ls_y = []

for idex, categorie in enumerate(categories):
    label = [0 for i in range(num_classes)]
    label[idex] = 1
    image_dir = groups_folder_path+'/'+ categorie + '/'

    for top, dir, f in os.walk(image_dir):
        for filename in f:
            if filename.endswith('.jpg'):
                img = cv2.imread(image_dir + filename)
                img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
                img = cv2.resize(img, (192,128))
                ls_x.append(img / 256)
                ls_y.append(label)

X_train = np.array(ls_x)
Y_train = np.array(ls_y)

print(X_train.shape)
print(X_train.shape[1:])

model = Sequential()
model.add(Conv2D(32,(3,3), activation='relu',
                        input_shape=(128, 192, 1)))
model.add(MaxPooling2D(pool_size=(2, 2)))
model.add(Dropout(0.25))

model.add(Convolution2D(32, (3, 3), activation='relu'))
model.add(MaxPooling2D(pool_size=(2, 2)))
model.add(Dropout(0.25))

model.add(Convolution2D(64, (3, 3), activation='relu'))
model.add(MaxPooling2D(pool_size=(2, 2)))
model.add(Dropout(0.25))

model.add(Convolution2D(64, (3, 3), activation='relu'))
model.add(MaxPooling2D(pool_size=(2, 2)))
model.add(Dropout(0.25))

model.add(Convolution2D(64, (3, 3), activation='relu'))
model.add(MaxPooling2D(pool_size=(2, 2)))
model.add(Dropout(0.25))

#Classifier
model.add(Flatten())
model.add(Dense(200, activation = 'relu'))
model.add(Dense(2,activation = 'softmax'))

model.summary()

model.compile(loss='binary_crossentropy', optimizer='Adam', metrics=['accuracy'])
hist=model.fit(X_train, Y_train, batch_size=32, epochs=200)

model.save('ONOFFMODEL.h5')