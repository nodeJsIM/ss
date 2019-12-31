## 实现设计

### 表名

#### 客服表

```sql
CREATE TABLE seat
(
    id serial primary key,
    qunar_name       VARCHAR(40),
    web_name         VARCHAR(40),
    nickname         VARCHAR(50),
    face_link        VARCHAR(150),
    supplier_id      INTEGER,
    priority         DOUBLE PRECISION,
    create_time      TIMESTAMP(6) WITH TIME ZONE DEFAULT now() NOT NULL,
    last_update_time TIMESTAMP(6) WITH TIME ZONE DEFAULT now() NOT NULL,
    old_supplier_id  INTEGER,
    old_id           INTEGER,
    service_status   SMALLINT    DEFAULT 0,
    status           SMALLINT    DEFAULT 1,
    max_user         SMALLINT    DEFAULT 10,
    bind_wx          SMALLINT    DEFAULT '0' :: SMALLINT,
    host             VARCHAR(20) DEFAULT 'qtalk.openresty.org' :: CHARACTER VARYING
);

```

#### Session

```sql
CREATE TABLE session
(
   id serial primary key,
  session_id    VARCHAR(255)                              NOT NULL,
  user_name     VARCHAR(255) DEFAULT NULL :: CHARACTER VARYING,
  seat_name     VARCHAR(255) DEFAULT NULL :: CHARACTER VARYING,
  shop_name     VARCHAR(255) DEFAULT NULL :: CHARACTER VARYING,
  product_id    TEXT,
  session_state SMALLINT     DEFAULT 0,
  isrobot_seat  SMALLINT     DEFAULT 0,
  created_time  TIMESTAMP(6) WITH TIME ZONE DEFAULT now() NOT NULL,
  update_time   TIMESTAMP(6) WITH TIME ZONE DEFAULT now() NOT NULL
);
```

#### session_mapping

```sql
CREATE SEQUENCE session_mapping_id_seq;

CREATE TABLE session_mapping
(
  id               INTEGER DEFAULT nextval('session_mapping_id_seq' :: REGCLASS)          NOT NULL,
  customer_name    VARCHAR(150) DEFAULT '' :: CHARACTER VARYING                           NOT NULL,
  shop_id          INTEGER DEFAULT 0                                                      NOT NULL,
  product_id       VARCHAR(150) DEFAULT '*' :: CHARACTER VARYING                          NOT NULL,
  session_id       VARCHAR(50)                                                            NOT NULL
    CONSTRAINT session_mapping_pkey
    PRIMARY KEY,
  seat_id          INTEGER DEFAULT 0                                                      NOT NULL,
  status           INTEGER DEFAULT 1                                                      NOT NULL,
  request_count    INTEGER DEFAULT 1                                                      NOT NULL,
  distributed_time TIMESTAMP WITH TIME ZONE DEFAULT to_timestamp((0) :: DOUBLE PRECISION) NOT NULL,
  inqueue_time     TIMESTAMP WITH TIME ZONE DEFAULT now()                                 NOT NULL,
  last_ack_time    TIMESTAMP WITH TIME ZONE DEFAULT now()                                 NOT NULL,
  seat_name        VARCHAR(150) DEFAULT '' :: CHARACTER VARYING                           NOT NULL,
  group_id         INTEGER DEFAULT 0
);
```

#### busi_supplier_mapping

```sql
CREATE TABLE busi_supplier_mapping
(
   id serial primary key,
  supplier_id       INTEGER,
  busi_id           INTEGER,
  busi_supplier_id  VARCHAR(50),
  create_time       TIMESTAMP(6) WITH TIME ZONE DEFAULT now() NOT NULL,
  last_update_time  TIMESTAMP(6) WITH TIME ZONE DEFAULT now() NOT NULL,
  bsuid_and_type    VARCHAR(55),
  supplier_operator VARCHAR(50),
  operator_webname  VARCHAR(50),
  status            INTEGER DEFAULT 1
);
```

#### busi_seat_mapping

```sql
CREATE TABLE busi_seat_mapping
( id serial primary key,
  busi_id          INTEGER,
  seat_id          INTEGER,
  create_time      TIMESTAMP(6) WITH TIME ZONE DEFAULT now() NOT NULL,
  last_update_time TIMESTAMP(6) WITH TIME ZONE DEFAULT now() NOT NULL,
  status           INTEGER DEFAULT 1
);

CREATE INDEX seat_id_bsem_idx
  ON busi_seat_mapping (seat_id);
```

#### supplier

```sql
CREATE TABLE supplier
(
  id serial primary key,
  name                VARCHAR(100),
  create_time         TIMESTAMP(6) WITH TIME ZONE DEFAULT now() NOT NULL,
  last_update_time    TIMESTAMP(6) WITH TIME ZONE DEFAULT now() NOT NULL,
  old_id              INTEGER,
  logo_url            VARCHAR(255),
  welcomes            VARCHAR(512),
  status              INTEGER  DEFAULT 1,
  ext_flag            SMALLINT DEFAULT 0,
  assign_strategy     SMALLINT DEFAULT '0' :: SMALLINT,
  no_service_welcomes VARCHAR  DEFAULT '' :: CHARACTER VARYING
);
```