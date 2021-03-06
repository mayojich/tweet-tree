FROM ubuntu:latest
MAINTAINER Tang Li Qun "tliqun@gmail.com"
RUN apt-get update -y && apt-get install -y python3-pip python3-dev build-essential
COPY . /app
#EXPOSE 5000
WORKDIR /app/docker-app
RUN pip3 install -r requirements.txt
ENV LANG C.UTF-8
CMD gunicorn --bind 0.0.0.0:$PORT wsgi
#CMD python3 app.py
