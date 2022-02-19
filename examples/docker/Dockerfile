FROM continuumio/miniconda3:4.10.3

RUN pip cache purge \
    && pip install git+https://github.com/mileslich/mlflow \
    && pip install azure-storage-blob==12.3.0 \
    && pip install numpy==1.21.2 \
    && pip install scipy \
    && pip install pandas==1.3.3 \
    && pip install scikit-learn==0.24.2 \
    && pip install cloudpickle
