FROM continuumio/miniconda3:4.10.3

ADD /mlflow /mlflow
ADD requirements.txt .

RUN pip install -r requirements.txt